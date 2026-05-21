import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function parseAge(value) {
  const number = Number(value);
  if (!Number.isInteger(number)) return null;
  if (number < 18 || number > 99) return null;
  return number;
}

function createCertificateCode() {
  return `PJD-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 90 + 10)}`;
}

function formatDisplayDate(date) {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const fullName = clean(body.name);
    const email = clean(body.email).toLowerCase();
    const phone = clean(body.phone);

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { message: "Name, email, and phone are required to issue a certificate." },
        { status: 400 }
      );
    }

    // --- CHECK FOR EXISTING MEMBER ---
    const existingMember = await prisma.member.findFirst({
      where: {
        OR: [
          { email: email },
          { phone: phone }
        ]
      }
    });

    if (existingMember) {
      const isEmailMatch = existingMember.email === email;
      const duplicateField = isEmailMatch ? "email address" : "phone number";
      
      return NextResponse.json(
        { message: `A member with this ${duplicateField} is already registered.` },
        { status: 409 } // 409 Conflict is the standard status code for duplicates
      );
    }
    // ---------------------------------

    const issuedAt = new Date();
    const displayDate = formatDisplayDate(issuedAt);
    const certificateCode = createCertificateCode();

    const record = await prisma.member.create({
      data: {
        fullName,
        email,
        phone,
        age: parseAge(body.age),
        city: clean(body.city) || null,
        profession: clean(body.profession) || null,
        category: clean(body.category) || null,
        state: clean(body.state) || null,
        certificate: {
          create: {
            certificateCode,
            issuedName: fullName.toUpperCase(),
            issuedAt,
            displayDate,
          },
        },
      },
      include: {
        certificate: true,
      },
    });

    return NextResponse.json(
      {
        member: {
          id: record.id,
          name: record.fullName,
          email: record.email,
          phone: record.phone,
        },
        certificate: {
          id: record.certificate.id,
          code: record.certificate.certificateCode,
          name: record.certificate.issuedName,
          date: record.certificate.displayDate,
          issuedAt: record.certificate.issuedAt,
          signedBy: record.certificate.signedBy,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Certificate creation failed", error);

    return NextResponse.json(
      { message: "Could not issue the certificate right now. Please try again." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
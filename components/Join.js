"use client";

import { useState } from "react";
import Certificate from "@/components/Certificate";
import { categories, states } from "@/data/site";

const initialForm = {
  name: "",
  age: "",
  city: "",
  profession: "",
  category: "",
  state: "",
  email: "",
  phone: "",
};

export default function Join() {
  const [form, setForm] = useState(initialForm);
  const [certificate, setCertificate] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const generateCertificate = async (event) => {
    event.preventDefault();
    const name = form.name.trim();

    if (!name || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill your name, email, and phone to generate your certificate.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/certificates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Could not issue the certificate right now.");
      }

      setCertificate({
        name: payload.certificate.name,
        id: payload.certificate.code,
        date: payload.certificate.date,
      });
      setForm(initialForm);
      setTimeout(() => {
        document.getElementById("certSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } catch (err) {
      setError(err.message || "Could not issue the certificate right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeCertificate = () => {
    setCertificate(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="sec s-join" id="join">
        <div className="sec-inner">
          <div className="join-grid">
            <div className="join-left rv">
              <span className="sec-label">Become a Member</span>
              <h2 className="sec-h">
                Join <span className="r">Pookie</span>
                <br />
                Janta Dal.
              </h2>
              <p>
                Fill the form. Get your <em>official membership certificate</em> instantly — printable, downloadable, and yours.
              </p>
              <p>This isn&apos;t a mailing list signup. This is a stand. The first official record of you joining the movement.</p>
              <div className="join-perks">
                <div className="join-perk">
                  <div className="join-perk-dot" />
                  <div>
                    <strong>Official Membership ID</strong> — generated the moment you join.
                  </div>
                </div>
                <div className="join-perk">
                  <div className="join-perk-dot" />
                  <div>
                    <strong>Downloadable Certificate</strong> — printable, shareable, signed.
                  </div>
                </div>
                <div className="join-perk">
                  <div className="join-perk-dot" />
                  <div>
                    <strong>Direct Updates</strong> — manifesto drops, events, voting drives.
                  </div>
                </div>
              </div>
            </div>

            <form className="join-form rv d1" onSubmit={generateCertificate}>
              <h3 className="jf-title">Membership Form</h3>
              <p className="jf-sub">Official &nbsp;•&nbsp; Form PJD-01</p>
              <div className="jform">
                <div className="jform-grid">
                  <input type="text" value={form.name} onChange={updateField("name")} placeholder="Full Name" required />
                  <div className="jform-2">
                    <input type="number" value={form.age} onChange={updateField("age")} placeholder="Age" min="18" max="99" />
                    <input type="text" value={form.city} onChange={updateField("city")} placeholder="State / City" />
                  </div>
                  <input type="text" value={form.profession} onChange={updateField("profession")} placeholder="College / Profession" />

                  <select value={form.category} onChange={updateField("category")}>
                    <option value="" disabled>
                      I identify as...
                    </option>
                    {categories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>

                  <select value={form.state} onChange={updateField("state")}>
                    <option value="" disabled>
                      Select State / UT
                    </option>
                    {states.map((state) => (
                      <option key={state}>{state}</option>
                    ))}
                  </select>

                  <div className="jform-2">
                    <input type="email" value={form.email} onChange={updateField("email")} placeholder="Email Address" required />
                    <input type="tel" value={form.phone} onChange={updateField("phone")} placeholder="Phone Number" required />
                  </div>
                  {error ? <p className="jform-error">{error}</p> : null}
                  <button className="jsubmit" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Issuing Certificate..." : "Join & Generate Certificate →"}
                  </button>
                  <p className="jf-note">By joining, you support the PJD manifesto and our 8 demands.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Certificate certificate={certificate} onClose={closeCertificate} />
    </>
  );
}

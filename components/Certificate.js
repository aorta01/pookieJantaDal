"use client";

import { useRef } from "react";
import html2canvas from "html2canvas";

export default function Certificate({ certificate, onClose }) {
  const certRef = useRef(null);

  if (!certificate) return null;

  const downloadAsJPEG = async () => {
    const element = certRef.current;
    if (!element) return;

    try {
      // html2canvas converts the DOM element into a canvas
      const canvas = await html2canvas(element, {
        scale: 2, // Increases the resolution of the downloaded image
        useCORS: true, // Allows loading cross-origin resources if you have external images
        backgroundColor: "#ffffff", // Ensures the background isn't transparent in the JPEG
      });

      // Convert canvas to a JPEG data URL
      const dataUrl = canvas.toDataURL("image/jpeg", 1.0);

      // Create a temporary link to trigger the download
      const link = document.createElement("a");
      link.download = `${certificate.name.replace(/\s+/g, "_")}_Certificate.jpg`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Failed to generate image:", error);
    }
  };

  return (
    <section className="cert-section show" id="certSection">
      <div className="cert-wrap">
        <p className="cert-success">✓ Membership Approved</p>
        <h2 className="cert-h">Welcome to the Dal.</h2>
        <p className="cert-sub">Your official membership certificate has been issued.</p>

        {/* Attach the ref directly to the card you want to download */}
        <div className="cert-card" id="certCard" ref={certRef}>
          <span className="cert-c1" />
          <span className="cert-c2" />

          <div className="cert-header">
            <div className="cert-party">
              POOKIE <span className="r">JANTA</span> DAL
            </div>
            <p className="cert-tag">For Those Who Cares &nbsp;•&nbsp; Establishment 2026</p>
          </div>

          <div className="cert-body">
            <p className="cert-presented">This certifies that</p>
            <h1 className="cert-name">{certificate.name}</h1>
            <p className="cert-msg">
              is an official member of Pookie Janta Dal — a citizen committed to the manifesto and its eight demands for a better Bharat.
              Rants nahi, results chahiye.
            </p>
          </div>

          <div className="cert-meta">
            <div className="cert-meta-b">
              <p className="cert-meta-l">Membership ID</p>
              <p className="cert-meta-v">{certificate.id}</p>
            </div>
            <div className="cert-meta-b">
              <p className="cert-meta-l">Date of Joining</p>
              <p className="cert-meta-v">{certificate.date}</p>
            </div>
            <div className="cert-meta-b">
              <p className="cert-meta-l">Signed</p>
              <p className="cert-meta-v">Kaushal, Founder</p>
            </div>
          </div>
        </div>

        <div className="cert-actions">
          {/* Changed onClick to trigger our new download function */}
          <button className="cert-btn" type="button" onClick={downloadAsJPEG}>
            Download Certificate
          </button>
          <button className="cert-btn out" type="button" onClick={onClose}>
            Back to Site
          </button>
        </div>
      </div>
    </section>
  );
}
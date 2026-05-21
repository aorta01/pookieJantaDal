"use client";

import { useState } from "react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer id="contact">
        <div className="f-grid">
          <div>
            {/* <div className="f-seal">✊</div> */}
            <div className="f-bn">Pookie Janta Dal</div>
            <p className="f-bt">
              &quot;For Those Who Cares.&quot;
              <br />
              No More Rants. Only Results.
              <br />
              Establishment 2026 — Bharat.
            </p>
            <p className="f-founder">Founded by Kaushal</p>
          </div>

          <div className="f-col">
            <span className="f-col-l">Sections</span>
            <a href="#identity">Identity</a>
            <a href="#vision">Vision</a>
            <a href="#eligibility">Eligibility</a>
            <a href="#demands">Demands</a>
            <a href="#organisation">Organisation</a>
            <a href="#join">Join the Dal</a>
          </div>

          <div className="f-col">
            <span className="f-col-l">Contact</span>
            <a href="mailto:contact@pookiejantadal.org">contact@pookiejantadal.org</a>
            <a href="mailto:pookiejantadal@gmail.com">pookiejantadal@gmail.com</a>
            <p className="press-note">For press &amp; partnerships, write to contact@pookiejantadal.org with subject: PRESS</p>
          </div>

          <div className="f-col">
            <span className="f-col-l">Follow</span>
            <a href="https://instagram.com/pookiejantadal" target="_blank" rel="noreferrer">
              Instagram — @pookiejantadal
            </a>
            <a href="https://x.com/pookiejantadal" target="_blank" rel="noreferrer">
              X (Twitter) — @pookiejantadal
            </a>
            <a href="https://youtube.com/@pookiejantadal" target="_blank" rel="noreferrer">
              YouTube — @pookiejantadal
            </a>
            {/* <button className="footer-link" type="button" onClick={() => setIsModalOpen(true)}>
              WhatsApp Community
            </button> */}
          </div>
        </div>

        <div className="f-bottom">
          <span className="cp">© 2026 Pookie Janta Dal. All Rights Reserved.</span>
          <span className="yr">Establishment 2026 — Bharat 🔴</span>
        </div>
      </footer>

      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

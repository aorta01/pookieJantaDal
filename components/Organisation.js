"use client";

import { useState } from "react";
import ComingSoonModal from "@/components/ComingSoonModal";
import { organisationCards } from "@/data/site";

export default function Organisation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="s-org" id="organisation">
        <div className="s-org-inner">
          <div className="org-head rv">
            <span className="sec-label">Organisation</span>
            <h2 className="sec-h">
              Building Across
              <br />
              Every <span className="r">State, Profession &amp; College.</span>
            </h2>
            <p>Our ground network is forming. State units, professional wings, and college chapters — coming soon across Bharat.</p>
          </div>
        </div>

        <div className="org-scroll-wrap rv d1">
          <div className="org-row">
            {organisationCards.map((card) => (
              <button key={card.title} className="org-card" type="button" onClick={() => setIsModalOpen(true)}>
                <span className="org-icon">{card.icon}</span>
                <h3 className="org-title">{card.title}</h3>
                <p className="org-desc">{card.desc}</p>
                <span className="org-badge">Cooking — Coming Soon</span>
              </button>
            ))}
          </div>
          {/* <div className="org-hint">
            ← <span>Scroll</span> to see all wings <span>→</span>
          </div> */}
        </div>
      </section>

      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

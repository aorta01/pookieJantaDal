"use client";

import { useState } from "react";
import { eligibility } from "@/data/demands";

export default function Vision() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <section className="sec s-vision" id="vision">
      <div className="sec-inner">
        <div className="v-head rv">
          <span className="sec-label">Vision &amp; Mission</span>
          <h2 className="sec-h">
            We Don&apos;t Want A Seat.
            <br />
            <span className="r">We Want To Build</span> <span className="gh">The Table.</span>
          </h2>
        </div>

        <div className="v-grid">
          <div className="v-block rv">
            <span className="v-lbl">Vision</span>
            <h3>
              The Establishment
              <br />
              We Deserve.
            </h3>
            <p>
              To create an alternate political establishment that brings every ignored, exhausted, and angry young Indian under one roof —
              students, unemployed graduates, JEE/NEET and Civil Services aspirants, farmers, women, and first-time voters.
            </p>
            <p>
              To carry their voices <strong>from the street into the assembly</strong>, and from the assembly into the law.
            </p>
          </div>
          <div className="v-block alt rv d1">
            <span className="v-lbl">Mission</span>
            <h3>
              On Record.
              <br />
              On The Floor.
            </h3>
            <p>
              One that raises our demands on the floor of Parliament. Keeps our voices <strong>permanently on record.</strong> Holds elected
              representatives accountable — by name, by vote, by history.
            </p>
            <p>
              Gen Z is not just a demographic. We are a part of the constituency. <strong>And we vote.</strong>
            </p>
          </div>
        </div>

        <div className="v-mandate rv">
          <div className="v-mn">25%</div>
          <p className="v-ml">Of Seats In Upcoming State &amp; Parliamentary Elections</p>
          <p className="v-ms">
            &quot;We are not here to protest outside the gates. We are coming in — as candidates, as voters, as the next establishment.&quot;
          </p>
        </div>

        <div className="elig-head rv" id="eligibility">
          <h3>
            Who Belongs In <span className="r">Pookie Janta Dal</span>?
          </h3>
          <p>This is not a club. It is not a fan page. It is a movement — and it has rules about who carries it forward.</p>
        </div>

          <div className="elig-cards">
            {eligibility.map((card, index) => {
              const isOpen = openCard === card.n;
              return (
                <div 
                  key={card.n} 
                  className={`rv ${index ? `d${index}` : ""}`}
                  style={{ display: "contents" }}
                >
                  <button
                    className={`elig-card ${isOpen ? "open" : ""}`}
                    type="button"
                    onClick={() => setOpenCard(isOpen ? null : card.n)}
                  >
                    <div className="elig-num">{card.n}</div>
                    <h3 className="elig-card-title">{card.title}</h3>
                    <p className="elig-card-pre">{card.preview}</p>
                    <span className="elig-card-tog">{isOpen ? "Close ↑" : "Read More ↓"}</span>
                    <div className="elig-card-full">{card.full}</div>
                  </button>
                </div>
              );
            })}
          </div>
        <div className="elig-cta-wrap rv d2">
          <a href="#join" className="btn-primary">
            <span>Join Pookie Janta Dal — Be The Change</span>
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { demands } from "@/data/demands";

export default function Demands() {
  const [openRows, setOpenRows] = useState(new Set());

  const toggleRow = (number) => {
    setOpenRows((current) => {
      const next = new Set();
      if (!current.has(number)) next.add(number);
      return next;
    });
  };

  const expandAll = (event) => {
    event.preventDefault();
    setOpenRows((current) => (current.size === demands.length ? new Set() : new Set(demands.map((demand) => demand.n))));
  };

  return (
    <section className="sec s-demands" id="demands">
      <div className="sec-inner">
        <div className="d-head">
          <div className="rv">
            <span className="sec-label">The Manifesto</span>
            <h2 className="sec-h">
              Eight Demands.
              <br />
              <span className="r">Every One</span> <span className="gh">On Record.</span>
            </h2>
          </div>
          <div className="d-head-r rv d1">
            <p>Click any demand below to expand and read the full text. These are not suggestions — they are non-negotiable.</p>
          </div>
        </div>

        <div className="d-list rv d2">
          {demands.map((demand) => {
            const isOpen = openRows.has(demand.n);
            return (
              <button
                key={demand.n}
                className={`d-row ${isOpen ? "open" : ""}`}
                type="button"
                onClick={() => toggleRow(demand.n)}
              >
                <div className="d-row-num">{demand.n}</div>
                <div className="d-row-title">{demand.t}</div>
                <div className="d-row-tag">&quot;{demand.q}&quot;</div>
                <div className="d-row-arrow">▸</div>
                <div className="d-detail">
                  <p className="d-detail-q">&quot;{demand.q}&quot;</p>
                  <p className="d-detail-body">{demand.b}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="d-cta-wrap rv">
          <a href="#" className="btn-outline" onClick={expandAll}>
            {openRows.size === demands.length ? "Collapse All Demands ↑" : "Read All 8 Demands ↓"}
          </a>
        </div>
      </div>
    </section>
  );
}

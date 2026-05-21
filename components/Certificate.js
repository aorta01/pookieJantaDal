export default function Certificate({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <>
      {/* Print-specific styles injected directly */}
      <style>{`
        @media print {
          /* Hide everything in the body by default */
          body * {
            visibility: hidden;
          }
          
          /* Make only the certificate card and its children visible */
          #certCard, #certCard * {
            visibility: visible;
          }
          
          /* Reposition the certificate to the top left of the print page */
          #certCard {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 20px; /* Adjust padding if needed for print margins */
          }

          /* Optional: remove browser headers/footers and margins */
          @page {
            margin: 0;
          }
        }
      `}</style>

      <section className="cert-section show" id="certSection">
        <div className="cert-wrap">
          <p className="cert-success">✓ Membership Approved</p>
          <h2 className="cert-h">Welcome to the Dal.</h2>
          <p className="cert-sub">Your official membership certificate has been issued.</p>

          <div className="cert-card" id="certCard">
            <span className="cert-c1" />
            <span className="cert-c2" />

            {/* <svg className="cert-bg-symbol" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g stroke="#C0172B" strokeWidth="1" fill="none">
                <circle cx="160" cy="160" r="140" />
                <circle cx="160" cy="160" r="120" />
                <path d="M115,115 L115,165 Q115,195 145,200 L185,200 Q215,200 215,170 L215,125 Q215,105 200,105 L190,105 Q180,105 180,115 L180,145" />
                <path d="M140,150 L140,125 Q140,113 150,113 Q160,113 160,125 L160,155" />
                <path d="M160,145 L160,120 Q160,108 170,108 Q180,108 180,120 L180,155" />
                <path d="M180,147 L180,127 Q180,115 190,115 Q200,115 200,127 L200,155" />
                <path d="M200,155 L200,143 Q200,135 207,135 Q215,135 215,143 L215,165" />
                <path d="M115,165 L115,220 Q115,235 130,235 L185,235 Q205,235 215,225" />
              </g>
            </svg> */}

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
            <button className="cert-btn" type="button" onClick={() => window.print()}>
              Print Certificate
            </button>
            <button className="cert-btn out" type="button" onClick={onClose}>
              Back to Site
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
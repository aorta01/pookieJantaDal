export default function ComingSoonModal({ isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen ? "on" : ""}`} onClick={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal-box" role="dialog" aria-modal="true" aria-label="Coming soon">
        <span className="modal-e">🔴</span>
        <div className="modal-t">Cooking!</div>
        <p className="modal-p">This section is being built by our ground team. Join the Dal to be the first notified when it goes live.</p>
        <button className="modal-c" type="button" onClick={onClose}>
          Close — Taiyaar Raho
        </button>
      </div>
    </div>
  );
}

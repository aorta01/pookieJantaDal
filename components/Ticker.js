import { tickerItems } from "@/data/site";

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker">
      <div className="tk">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="ticker-pair">
            <span className="ti">{item}</span>
            <span className="td">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

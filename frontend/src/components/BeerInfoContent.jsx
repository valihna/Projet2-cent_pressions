import "./BeerInfoContent.css";

function BeerInfoContent({ header, value }) {
  return (
    <div className="beer-info-content">
      <div className="beer-info-content-header">{header}</div>
      <div className="beer-info-content-value">{value}</div>
    </div>
  );
}

export default BeerInfoContent;

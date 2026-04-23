import "./HomeSectionTitle.css";

function HomeSectionTitle({ title, buttonText = "View More" }) {
  return (
    <div className="home-section-title">
      <h2>{title}</h2>
      <button>{buttonText}</button>
    </div>
  );
}

export default HomeSectionTitle;
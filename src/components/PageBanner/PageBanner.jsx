import "./PageBanner.css";

function PageBanner({ title, subtitle }) {
  return (
    <section className="page-banner">
      <div className="page-banner-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

export default PageBanner;
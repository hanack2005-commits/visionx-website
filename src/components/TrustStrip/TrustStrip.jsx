import "./TrustStrip.css";

function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="trust-strip-container">
        <p className="trust-strip-title">Trusted Technology Direction</p>

        <div className="trust-strip-grid">
          <div className="trust-badge">ISO Standards</div>
          <div className="trust-badge">Startup Mission</div>
          <div className="trust-badge">Digital Innovation</div>
          <div className="trust-badge">Make In India</div>
          <div className="trust-badge">Govt Support</div>
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;
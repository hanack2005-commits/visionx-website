import MainLayout from "../layout/MainLayout";
import PageBanner from "../components/PageBanner/PageBanner";

function ProjectPage() {
  return (
    <MainLayout>
      <PageBanner
        title="Project Details"
        subtitle="A closer look at one of our featured digital solutions."
      />

      <section style={{ padding: "70px 20px 90px", background: "#020617", color: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <div
            style={{
              height: "320px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #0ea5e9, #1e293b)",
              marginBottom: "30px"
            }}
          ></div>

          <span
            style={{
              display: "inline-block",
              marginBottom: "14px",
              padding: "8px 12px",
              borderRadius: "999px",
              background: "rgba(56, 189, 248, 0.1)",
              color: "#38bdf8",
              fontSize: "13px",
              fontWeight: "600"
            }}
          >
            Business Website
          </span>

          <h2 style={{ fontSize: "38px", marginBottom: "18px" }}>
            Corporate Business Website
          </h2>

          <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "17px", marginBottom: "16px" }}>
            This project was designed to create a strong online identity for a modern company.
            The goal was to build a responsive, clean, and trustworthy website experience.
          </p>

          <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "17px", marginBottom: "16px" }}>
            The design focuses on premium visuals, clear navigation, mobile responsiveness,
            and strong call-to-action sections that encourage user engagement.
          </p>

          <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "17px" }}>
            Technologies used in this concept include React, Parcel, CSS, responsive layouts,
            and modern UI design principles.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}

export default ProjectPage;
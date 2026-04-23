import MainLayout from "../layout/MainLayout";
import PageBanner from "../components/PageBanner/PageBanner";
import Services from "../components/Services/Services";

function ServicesPage() {
  return (
    <MainLayout>
      <PageBanner
        title="Our Services"
        subtitle="From websites and software to training and consulting, VisionX delivers digital services built for modern business."
      />
      <Services showHeader={false} />
    </MainLayout>
  );
}

export default ServicesPage;
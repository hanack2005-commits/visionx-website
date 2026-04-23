import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <MainLayout>
      <section className="notfound-page">
        <div className="notfound-container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            The page you are looking for does not exist or may have been moved.
          </p>

          <Link to="/" className="notfound-btn">
            Back to Home
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}

export default NotFoundPage;
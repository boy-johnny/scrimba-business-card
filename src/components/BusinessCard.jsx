import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import contents from "../index.js";

export default function BusinessCard() {
  return (
    <div className="Business-Card">
      <Header />
      <main>
        {contents.map((content) => (
          <Article
            key={content.key}
            title={content.title}
            description={content.description}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';
import SEOHead from '../components/SEOHead';

function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Golden Visa Ελλάδα 2024: Ολοκληρωμένος Οδηγός",
      excerpt: "Όλα όσα χρειάζεται να γνωρίζετε για το Golden Visa στην Ελλάδα, τις απαιτήσεις και τη διαδικασία.",
      date: "2024-12-19",
      category: "Μεταναστευτικό Δίκαιο",
      slug: "golden-visa-odigos-2024"
    },
    {
      id: 2,
      title: "Διαζύγια στην Ελλάδα: Τι Πρέπει να Ξέρετε",
      excerpt: "Ολοκληρωμένος οδηγός για τη διαδικασία διαζυγίου, τα έξοδα και τις νομικές υποχρεώσεις.",
      date: "2024-12-18",
      category: "Οικογενειακό Δίκαιο",
      slug: "diazygia-ellada-odigos"
    },
    {
      id: 3,
      title: "Άδεια Διαμονής για Πολίτες Τρίτων Χωρών",
      excerpt: "Πώς να αποκτήσετε άδεια διαμονής στην Ελλάδα και ποια είναι τα απαραίτητα έγγραφα.",
      date: "2024-12-17",
      category: "Μεταναστευτικό Δίκαιο",
      slug: "adeia-diamonis-triton-choron"
    },
    {
      id: 4,
      title: "Αγορά Σπιτιού στην Ελλάδα: Νομικές Υποχρεώσεις",
      excerpt: "Οι νομικές διαδικασίες και υποχρεώσεις κατά την αγορά ακινήτου στην Ελλάδα.",
      date: "2024-12-16",
      category: "Αστικό Δίκαιο",
      slug: "agora-spitiou-ellada"
    },
    {
      id: 5,
      title: "Επιμέλεια Παιδιών μετά το Διαζύγιο",
      excerpt: "Πώς καθορίζεται η επιμέλεια παιδιών και ποια είναι τα δικαιώματα των γονέων.",
      date: "2024-12-15",
      category: "Οικογενειακό Δίκαιο",
      slug: "epimeleia-paidion-diazygio"
    },
    {
      id: 6,
      title: "Μεταφράσεις Εγγράφων: Πότε Χρειάζονται",
      excerpt: "Οδηγός για τις επίσημες μεταφράσεις και επικυρώσεις εγγράφων στην Ελλάδα.",
      date: "2024-12-14",
      category: "Μεταφράσεις",
      slug: "metafraseis-egrafon-odigos"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Νομικό Blog | Δικηγόρος Μαρίνα Ιλιούσινα | Νομικές Συμβουλές"
        description="Νομικό blog με συμβουλές και οδηγούς για Golden Visa, διαζύγια, μεταναστευτικό δίκαιο και άλλες νομικές υπηρεσίες από τη δικηγόρο Μαρίνα Ιλιούσινα."
        keywords="νομικό blog, νομικές συμβουλές, golden visa blog, διαζύγια blog, μεταναστευτικό δίκαιο blog, νομικές πληροφορίες, δικηγόρος συμβουλές"
        canonical="https://milawyer.gr/blog"
        hreflang={{
          "el": "https://milawyer.gr/blog",
          "en": "https://milawyer.gr/blog",
          "ru": "https://milawyer.gr/blog",
          "x-default": "https://milawyer.gr/blog"
        }}
      />

      {/* Hero Section */}
      <section className="law-area-section">
        <div className="law-area-container">
          <h1 className="law-area-title">Νομικό Blog</h1>
          <div className="law-area-divider"></div>
          <p className="law-area-description">
            Νομικές συμβουλές και οδηγοί από τη δικηγόρο Μαρίνα Ιλιούσινα. 
            Μάθετε περισσότερα για τα δικαιώματά σας και τις νομικές διαδικασίες.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post">
                <div className="blog-post-header">
                  <span className="blog-category">{post.category}</span>
                  <time className="blog-date">{post.date}</time>
                </div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={`/blog/${post.slug}`} className="blog-read-more">
                  Διαβάστε Περισσότερα →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <h2>Ενημερωθείτε για Νέες Συμβουλές</h2>
          <p>Λάβετε τις τελευταίες νομικές συμβουλές και ενημερώσεις</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Το email σας" />
            <button type="submit">Εγγραφή</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;

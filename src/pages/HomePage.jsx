import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <div className="parallax-content">
          <h1>Προστασία των νομικών συμφερόντων σας <br /> στην Ελλάδα</h1>
          <p>Εξειδικευμένες νομικές συμβουλές</p>
          <a href="mailto:ilyushina.law@gmail.com" className="cta-button">Επικοινωνήστε μαζί μας</a>
        </div>
      </section>

      {/* Services/Values Section */}
      <section id="services">
        <div className="container">
          <h2 className="visually-hidden">Βασικές Αξίες</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/Clip path group.png" alt="Ακεραιότητα και Ηθική" />
              </div>
              <h3>Ακεραιότητα και Ηθική</h3>
              <p>Δέσμευση σε υψηλά πρότυπα, ειλικρίνεια και διαφάνεια σε κάθε υπόθεση</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/Group.png" alt="Νομική Εξιδίκευση" />
              </div>
              <h3>Νομική Εξιδίκευση</h3>
              <p>Στοχευμένη γνώση και αποτελεσματική διαχείριση νομικών ζητημάτων</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/Group1.png" alt="Προσωπική Δέσμευση" />
              </div>
              <h3>Προσωπική Δέσμευση</h3>
              <p>Προτεραιότητα στις ανάγκες σας και δυναμική υπεράσπιση των συμφερόντων σας</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Σχετικά με εμένα</h2>
              <p>Προσφέρω ολοκληρωμένες νομικές υπηρεσίες ως δικηγόρος στην Αθήνα, εξυπηρετώντας ιδιώτες και επιχειρήσεις σε όλη την Ελλάδα αλλά και πελάτες από το εξωτερικό. Με πολυετή εμπειρία και εξειδίκευση στο Οικογενειακό & Κληρονομικό Δίκαιο, το Μεταναστευτικό Δίκαιο (άδειες διαμονής, ιθαγένεια), το Ποινικό Δίκαιο, το Αστικό Δίκαιο και το Εταιρικό & Εμπορικό Δίκαιο, παρέχω στρατηγική καθοδήγηση και δυναμική εκπροσώπηση σε κάθε στάδιο της νομικής διαδικασίας. Η πρακτική μου συνδυάζει επαγγελματισμό, διαφάνεια και προσαρμοσμένες λύσεις, ώστε κάθε υπόθεση να επιλύεται άμεσα, δίκαια και με πλήρη συμμόρφωση προς το ελληνικό δίκαιο. Στόχος μου είναι να διασφαλίζω τα συμφέροντα των εντολέων μου, προσφέροντας αξιόπιστη νομική υποστήριξη και αποτελέσματα υψηλής ποιότητας.</p>
            </div>
            <div className="about-image">
              <img src="/images/Ilyushina.jpg" alt="Marina Ilyushina - Δικηγόρος" />
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section id="areas">
        <div className="container">
          <h2>Τομείς Εξειδίκευσης</h2>
          <div className="areas-grid">
            <Link to="/family">
              <div className="area-card">
                <div className="area-card-top">
                  <h3>Οικογενειακό & Κληρονομικό Δίκαιο</h3>
                  <div className="area-icon">
                    <img src="/images/famaly.png" alt="Οικογενειακό Δίκαιο" />
                  </div>
                </div>
                <p>Στοχευμένη νομική καθοδήγηση σε διαζύγια, επιμέλεια, διατροφές και διαθήκες, με σεβασμό, ταχύτητα και πλήρη προστασία περιουσιακών δικαιωμάτων, εξασφαλίζοντας αξιόπιστη επίλυση κάθε οικογενειακής διαφοράς.</p>
              </div>
            </Link>
            <Link to="/immigration">
              <div className="area-card">
                <div className="area-card-top">
                  <h3>Μεταναστευτικό Δίκαιο</h3>
                  <div className="area-icon">
                    <img src="/images/immigration.png" alt="Μεταναστευτικό Δίκαιο" />
                  </div>
                </div>
                <p>Πλήρης υποστήριξη σε άδειες διαμονής, Golden Visa, ιθαγένεια και οικογενειακή επανένωση, με σαφή καθοδήγηση, γρήγορες διαδικασίες και υψηλά ποσοστά επιτυχίας για μετανάστες στην Ελλάδα.</p>
                              </div>
            </Link>
            <Link to="/criminal">
              <div className="area-card">
                <div className="area-card-top">
                  <h3>Ποινικό Δίκαιο</h3>
                  <div className="area-icon">
                    <img src="/images/criminal.png" alt="Ποινικό Δίκαιο" />
                  </div>
                </div>
                <p>Δυναμική ποινική υπεράσπιση σε πλημμελήματα και κακουργήματα, από έρευνα έως δίκη, διασφαλίζοντας τα δικαιώματά σας με στρατηγική, εμπειρία και πλήρη διαφάνεια σε κάθε στάδιο.</p>
                              </div>
            </Link>
            <Link to="/civil">
              <div className="area-card">
                <div className="area-card-top">
                  <h3>Αστικό Δίκαιο</h3>
                  <div className="area-icon">
                    <img src="/images/realestate.png" alt="Αστικό Δίκαιο" />
                  </div>
                </div>
                <p>Ολιστική νομική κάλυψη σε αποζημιώσεις, συμβατικές διαφορές, αδικοπραξίες και προστασία προσωπικών δικαιωμάτων, με άμεση, δίκαιη και αποτελεσματική επίλυση κάθε αστικής διαφοράς.</p>
                              </div>
            </Link>
            <Link to="/translations">
              <div className="area-card">
                <div className="area-card-top">
                  <h3>Μεταφράσεις & Επικυρώσεις</h3>
                  <div className="area-icon">
                    <img src="/images/translate.png" alt="Μεταφράσεις & Επικυρώσεις" />
                  </div>
                </div>
                <p>Επίσημες μεταφράσεις και επικυρώσεις νομικών εγγράφων, άμεσα αποδεκτές σε ελληνικές και διεθνείς αρχές, εξασφαλίζοντας ακρίβεια, εμπιστευτικότητα και πλήρη νομική ισχύ για κάθε χρήση.</p>
                              </div>
            </Link>
            <Link to="/corporate">
              <div className="area-card">
                <div className="area-card-top">
                  <h3>Εταιρικό & Εμπορικό Δίκαιο</h3>
                  <div className="area-icon">
                    <img src="/images/corporate.png" alt="Εταιρικό & Εμπορικό Δίκαιο" />
                  </div>
                </div>
                <p>Εξειδικευμένη νομική υποστήριξη σε ίδρυση εταιρειών, εμπορικές συμβάσεις, φορολογικό σχεδιασμό και εταιρικές διαφορές, με πρακτικές λύσεις που ενισχύουν την επιχειρηματική ανάπτυξη και προστατεύουν τα συμφέροντά σας.</p>
                              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage; 
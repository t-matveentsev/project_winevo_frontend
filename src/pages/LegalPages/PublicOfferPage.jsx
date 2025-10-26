import Container from "../../components/Container/Container";
import s from "./LegalPages.module.css";

export default function PublicOfferPage() {
  return (
    <section className={s.section}>
      <Container>
        <h1 className={s.title}>Umowa Oferty Publicznej</h1>

        <p className={s.text}>
          Niniejszy dokument określa zasady korzystania ze strony internetowej{" "}
          <strong>Winevo</strong> oraz warunki zawierania umów sprzedaży lub
          świadczenia usług za pośrednictwem strony.
        </p>

        <div className={s.block}>
          <h2 className={s.subtitle}>1. Dane kontaktowe</h2>
          <p className={s.text}>
            Właściciel strony: <strong>Winevo</strong> <br />
            E-mail:{" "}
            <a href="mailto:info@winevo.pl" className={s.link}>
              info@winevo.pl
            </a>
          </p>
        </div>

        <div className={s.block}>
          <h2 className={s.subtitle}>2. Zakres usług</h2>
          <p className={s.text}>
            Strona umożliwia zapoznanie się z ofertą produktów i usług
            związanych z winem. Informacje mają charakter informacyjny i nie
            stanowią oferty w rozumieniu Kodeksu cywilnego.
          </p>
        </div>

        <div className={s.block}>
          <h2 className={s.subtitle}>3. Zasady korzystania</h2>
          <ul className={s.list}>
            <li>
              Użytkownik zobowiązuje się do korzystania ze strony zgodnie z
              prawem i dobrymi obyczajami.
            </li>
            <li>
              Zakazane jest publikowanie treści bezprawnych lub obraźliwych.
            </li>
            <li>
              Administrator nie ponosi odpowiedzialności za przerwy w działaniu
              strony.
            </li>
          </ul>
        </div>

        <div className={s.block}>
          <h2 className={s.subtitle}>4. Prawa autorskie</h2>
          <p className={s.text}>
            Wszystkie materiały (tekst, zdjęcia, logotypy) stanowią własność{" "}
            <strong>Winevo</strong> i są chronione prawem autorskim.
          </p>
        </div>

        <div className={s.block}>
          <h2 className={s.subtitle}>5. Odpowiedzialność</h2>
          <p className={s.text}>
            Administrator nie ponosi odpowiedzialności za szkody wynikające z
            korzystania ze strony, w tym za utratę danych lub przerwy w
            dostępie.
          </p>
        </div>

        <div className={s.block}>
          <h2 className={s.subtitle}>6. Postanowienia końcowe</h2>
          <p className={s.text}>
            Administrator zastrzega sobie prawo do zmian niniejszego dokumentu.
            Aktualna wersja jest zawsze dostępna na stronie internetowej.
            Korzystanie z serwisu oznacza akceptację niniejszych warunków.
          </p>
        </div>
      </Container>
    </section>
  );
}

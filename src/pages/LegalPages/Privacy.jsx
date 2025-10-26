import Container from "../../components/Container/Container";
import s from "./LegalPages.module.css";

export default function PrivacyPolicyPage() {
  return (
    <section className={s.section}>
      <Container>
        <h1 className={s.title}>Polityka Prywatności</h1>

        <p className={s.text}>
          Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony
          danych osobowych przekazanych przez Użytkowników w związku z
          korzystaniem ze strony internetowej <strong>Winevo</strong>.
        </p>

        <div className={s.block}>
          <h2 className={s.subtitle}>1. Administrator danych</h2>
          <p className={s.text}>
            Administratorem danych osobowych jest <strong>Winevo</strong>{" "}
            (dalej: „Administrator”). Kontakt:{" "}
            <a href="mailto:info@winevo.pl" className={s.link}>
              info@winevo.pl
            </a>
            .
          </p>
        </div>

        <div className={s.block}>
          <h2 className={s.subtitle}>2. Zakres przetwarzanych danych</h2>
          <p className={s.text}>
            Administrator może przetwarzać dane takie jak: imię, adres e-mail,
            numer telefonu oraz dane techniczne dotyczące korzystania ze strony
            (np. adres IP, pliki cookies).
          </p>
        </div>

        <div className={s.block}>
          <h2 className={s.subtitle}>3. Cel przetwarzania danych</h2>
          <p className={s.text}>
            Dane osobowe są przetwarzane w celu realizacji usług, odpowiedzi na
            zapytania, analizy ruchu na stronie oraz poprawy funkcjonalności
            serwisu.
          </p>
        </div>

        <div className={s.block}>
          <h2 className={s.subtitle}>4. Pliki cookies</h2>
          <p className={s.text}>
            Strona korzysta z plików cookies w celu zapewnienia prawidłowego
            działania, statystyk odwiedzin oraz personalizacji treści.
            Użytkownik może w każdej chwili zmienić ustawienia cookies w
            przeglądarce.
          </p>
        </div>

        <div className={s.block}>
          <h2 className={s.subtitle}>5. Udostępnianie danych</h2>
          <p className={s.text}>
            Administrator nie udostępnia danych osobowych osobom trzecim, z
            wyjątkiem przypadków wymaganych przepisami prawa.
          </p>
        </div>

        <div className={s.block}>
          <h2 className={s.subtitle}>6. Prawa użytkownika</h2>
          <ul className={s.list}>
            <li>Dostęp do swoich danych</li>
            <li>Sprostowanie lub usunięcie danych</li>
            <li>Ograniczenie przetwarzania</li>
            <li>Przeniesienie danych</li>
            <li>Wniesienie skargi do Prezesa UODO</li>
          </ul>
        </div>

        <div className={s.block}>
          <h2 className={s.subtitle}>7. Zmiany w Polityce Prywatności</h2>
          <p className={s.text}>
            Administrator zastrzega sobie prawo do wprowadzenia zmian w
            niniejszej Polityce Prywatności. Aktualna wersja dokumentu jest
            zawsze dostępna na stronie internetowej.
          </p>
        </div>
      </Container>
    </section>
  );
}

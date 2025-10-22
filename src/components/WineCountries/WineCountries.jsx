import * as Accordion from "@radix-ui/react-accordion";
import s from "./WineCountries.module.css";
import { COUNTRIES_DETAILS } from "../../constants/countries";

const WineCountries = () => {
  return (
    <section className={s.wrapper}>
      <div>
        <h2 className={s.title}>Wine Countries</h2>
        <p className={s.subtitle}>
          Kraje, regiony, dlaczego powstaje tam wino, kluczowe odmiany i
          ciekawostki.
        </p>
      </div>

      <Accordion.Root type="multiple">
        {COUNTRIES_DETAILS.map((c) => (
          <Accordion.Item key={c.country} value={c.country} className={s.item}>
            <Accordion.Header className={s.headerRow}>
              <Accordion.Trigger className={s.trigger}>
                <div className={s.titleRow}>
                  <h3 className={s.country}>{c.country}</h3>
                </div>
                <span className={s.chevron} aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path
                      d="M8 10l4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className={s.content}>
              <dl className={s.grid}>
                <div className={s.row}>
                  <dt>Główne regiony:</dt>
                  <dd>{c.regions}</dd>
                </div>
                <div className={s.row}>
                  <dt>Dlaczego:</dt>
                  <dd>{c.why}</dd>
                </div>
                <div className={s.row}>
                  <dt>Odmiany:</dt>
                  <dd>{c.grapes}</dd>
                </div>
                <div className={`${s.row} ${s.rowLast}`}>
                  <dt>Ciekawostka:</dt>
                  <dd>{c.fun}</dd>
                </div>
              </dl>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
};

export default WineCountries;

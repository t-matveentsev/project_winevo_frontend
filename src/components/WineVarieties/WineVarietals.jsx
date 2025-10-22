import { useMemo, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { VARIETALS } from "../../constants/varietals";

import s from "./WineVarietals.module.css";

const badgeStyle = (t) => ({
  background: t === "red" ? "#722F37" : t === "white" ? "#D6E68A" : "#8b5cf6",
  color: "#fff",
  fontSize: 12,
  padding: "2px 8px",
  borderRadius: 999,
});

export default function WineVarietals({
  allowMultiple = false,
  allowCollapseAll = true,
} = {}) {
  const [query, setQuery] = useState("");
  const [openValues, setOpenValues] = useState([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return VARIETALS;
    return VARIETALS.filter(
      (v) =>
        v.name.toLowerCase().includes(q) || v.desc.toLowerCase().includes(q)
    );
  }, [query]);

  const type = allowMultiple ? "multiple" : "single";

  return (
    <div className={s.wrapper}>
      <div>
        <h2 className={s.title}>Wine varieties</h2>
        <div>
          <p className={s.subtitle}>
            Click on the type of wine you need to see more.
          </p>
          <input
            placeholder="Search (e.g. wiśnia, pieprz, Toskania)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={s.input}
          />
        </div>
      </div>

      <Accordion.Root
        type={type}
        {...(!allowMultiple && allowCollapseAll ? { collapsible: true } : {})}
        {...(allowMultiple
          ? { value: openValues, onValueChange: setOpenValues }
          : {})}
      >
        {filtered.map((v) => (
          <Accordion.Item key={v.name} value={v.name} className={s.item}>
            <Accordion.Header>
              <Accordion.Trigger className={s.trigger}>
                <div className={s.triggerInner}>
                  <span className={s.varietyName}>{v.name}</span>
                  {v.type && (
                    <span style={badgeStyle(v.type)}>
                      {v.type === "red"
                        ? "Red"
                        : v.type === "white"
                        ? "White"
                        : "Red/White"}
                    </span>
                  )}
                </div>
                <span className={s.chevron}>
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
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
              <p className={s.desc}>{v.desc}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}

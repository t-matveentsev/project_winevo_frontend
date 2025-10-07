import clsx from "clsx";

import "../index.css";

export default function buildLinkClass({ isActive }) {
  return clsx("link", isActive && "active");
}

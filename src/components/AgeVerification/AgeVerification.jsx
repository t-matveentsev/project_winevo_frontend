import { useEffect, useState } from "react";
import s from "./AgeVerification.module.css";

export default function AgeVerification() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("ageVerified");
    if (!saved) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const confirm = () => {
    setClosing(true);

    setTimeout(() => {
      localStorage.setItem("ageVerified", "true");
      setVisible(false);
      setClosing(false);
      document.body.style.overflow = "";
    }, 400);
  };

  if (!visible) return null;

  return (
    <section className={`${s.overlay} ${closing ? s.overlayClosing : ""}`}>
      <video
        className={s.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="photo/age-verification.jpg"
      >
        <source src="/video/age-verification.mp4" type="video/mp4" />
      </video>

      <div className={s.center}>
        <h2 className={s.brand}>WINEVO</h2>
        <p className={s.text}>Wine collection</p>

        <button className={s.btnYes} onClick={confirm}>
          <span className={s.textBtn}>Yes, I am over the age of 21</span>
        </button>

        <ul className={s.socialMedia}>
          <li>
            <a href="">facebook</a>
          </li>
          <li>
            <a href="">instagram</a>
          </li>
          <li>
            <a href="">linkedin</a>
          </li>
          <li>
            <a href="">github</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

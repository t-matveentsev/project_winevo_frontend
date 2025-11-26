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
        poster="/photo/age_verification.jpg"
      >
        <source
          src="/video/age_verification_mob.webm"
          type="video/webm"
          media="(max-width: 767px)"
        />
        <source
          src="/video/age_verification_mob.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />

        <source
          src="/video/age_verification_tab.webm"
          type="video/webm"
          media="(min-width: 768px) and (max-width: 1279px)"
        />
        <source
          src="/video/age_verification_tab.mp4"
          type="video/mp4"
          media="(min-width: 768px) and (max-width: 1279px)"
        />

        <source
          src="/video/age_verification_desc.webm"
          type="video/webm"
          media="(min-width: 1280px)"
        />
        <source
          src="/video/age_verification_desc.mp4"
          type="video/mp4"
          media="(min-width: 1280px)"
        />
      </video>

      <div className={s.center}>
        <h2 className={s.brand}>WINEVO</h2>
        <p className={s.text}>Wine collection</p>

        <button className={s.btnYes} onClick={confirm}>
          <span className={s.textBtn}>Yes, I am over the age of 21</span>
        </button>

        <ul className={s.socialMedia}>
          <li>
            <a
              href="https://www.facebook.com/panska85/?locale=pl_PL"
              target="_blank"
            >
              facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/panska85/" target="_blank">
              instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/artem-matvieientsev-a5a6862a1/"
              target="_blank"
            >
              linkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/t-matveentsev" target="_blank">
              github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

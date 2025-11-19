import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.notFoundBackground}>
      <div className={s.textWrapper}>
        <a href="/home" className={s.brand}>
          WINEVO
        </a>
        <p className={s.title}>
          Unfortunately, there is no wine here, and the page could not be found.
        </p>
        <a className={s.link} href="/home">
          Go to home!
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;

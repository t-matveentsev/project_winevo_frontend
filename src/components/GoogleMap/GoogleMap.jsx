import s from "./GoogleMap.module.css";

const GoogleMap = () => {
  return (
    <div>
      <p className={s.address}>ul. Pańska 85</p>
      <div className={s.mapWrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6232.8531597681995!2d20.989247073135044!3d52.230323031459776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8556b6edd1%3A0x6aa48efdd7328551!2sPa%C5%84ska%2085!5e1!3m2!1suk!2spl!4v1761289264968!5m2!1suk!2spl"
          width="300"
          height="250"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;

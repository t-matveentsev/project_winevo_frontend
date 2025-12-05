import { DNA } from "react-loader-spinner";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={s.overlay}>
      <div className={s.content}>
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          dnaColorOne="#7a2e2e"
          dnaColorTwo="#E8D96B"
        />
      </div>
    </div>
  );
}

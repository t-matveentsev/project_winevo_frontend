import { createPortal } from "react-dom";
import Loader from "../Loader/Loader";

const LoaderPortal = ({ isOpen }) => {
  if (!isOpen) return null;

  const loaderRoot = document.getElementById("loader-root");

  return createPortal(<Loader />, loaderRoot);
};

export default LoaderPortal;

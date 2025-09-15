import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AboutAsPage from "../pages/AboutAsPage/AboutAsPage";
import AboutWinePage from "../pages/AboutWinePage/AboutWinePage";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route />
        <Route path="/about" element={<AboutAsPage />}></Route>
        <Route path="/wine" element={<AboutWinePage />}></Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

import { Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import PurchasesPage from "pages/PurchasesPage";
import FavoritesPage from "pages/FavoritesPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/purchases" element={<PurchasesPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};

export default Router;

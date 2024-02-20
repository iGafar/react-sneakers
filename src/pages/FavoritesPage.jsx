import { useSelector } from "react-redux";
import CardsBlock from "../components/Cards/CardsBlock";
import EmptyPage from "../components/EmptyPage";

const emptyData = {
  img: "/icons/sadness.png",
  title: "Закладок нет :(",
  text: "Вы ничего не добавляли в закладки",
};

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <main>
      {favorites.length ? (
        <CardsBlock data={favorites} title={"закладки"} />
      ) : (
        <EmptyPage emptyData={emptyData} />
      )}
    </main>
  );
};

export default FavoritesPage;

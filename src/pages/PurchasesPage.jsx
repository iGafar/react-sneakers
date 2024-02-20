import CardsBlock from "components/Cards/CardsBlock";
import { useSelector } from "react-redux";
import EmptyPage from "../components/EmptyPage";

const emptyData = {
  img: "/icons/tear.png",
  title: "У вас нет заказов",
  text: "Вы нищеброд?  Оформите хотя бы один заказ.",
};

const PurchasesPage = () => {
  const purchases = useSelector((state) => state.purchases);

  return (
    <main>
      {purchases.length ? (
        <CardsBlock data={purchases} title={"покупки"} isPurchased />
      ) : (
        <EmptyPage emptyData={emptyData} />
      )}
    </main>
  );
};

export default PurchasesPage;

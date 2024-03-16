import styled from "styled-components";
import BasketCard from "./BasketCard";
import { useDispatch, useSelector } from "react-redux";
import { addToPurchases } from "../../store/slices/purchasesSlice";
import { clearBasket } from "../../store/slices/basketSlice";
import EmptyBasket from "./EmptyBasket";
import { useState } from "react";

const Basket = ({ openBasket, isOpen }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const [isPurchase, setIsPurchase] = useState(false);

  function addItems(items) {
    dispatch(addToPurchases(items));
    dispatch(clearBasket());
    setIsPurchase(true);
  }

  function closeBasket() {
    console.log(1);
    openBasket();
    setIsPurchase(false);
  }

  return (
    <BasketStyle className={isOpen && "open"}>
      <div onClick={() => closeBasket()}></div>
      <div className={isOpen ? "basket-open basket" : "basket"}>
        <h2>Корзина</h2>
        {basket.length ? (
          <FullBasketSyle>
            <ul>
              {basket.map((item) => (
                <BasketCard key={item.id} item={item} />
              ))}
            </ul>
            <p>
              Итого:<span></span>21 498 руб.
            </p>
            <p>
              Налог 5%:<span></span>1074 руб.
            </p>
            <button onClick={() => addItems(basket)}>
              {" "}
              Оформить заказ
              <img src="/icons/arrow.svg" alt="arrow" />
            </button>
          </FullBasketSyle>
        ) : (
          <EmptyBasket isPurchase={isPurchase} closeBasket={closeBasket} />
        )}
      </div>
    </BasketStyle>
  );
};

const BasketStyle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  transition: all 200ms linear;
  visibility: hidden;
  opacity: 0;

  &.open {
    visibility: visible;
    opacity: 1;
  }

  .basket {
    transform: translateX(100%);
    transition: all 300ms ease-in-out;
    transition-delay: 200ms;
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 30px;
    min-width: max(3.85rem, 330px);

    & > h2 {
      margin-bottom: 30px;
    }
  }

  .basket-open {
    transform: translateX(0);
  }

  & > div:first-of-type {
    width: 100%;
  }

  @media (max-width: 500px) {
    .basket {
      padding: 10px;
    }
  }
`;

const FullBasketSyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: auto;
    scrollbar-width: none;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;

    &:first-of-type {
      margin-bottom: 19px;
      margin-top: auto;
    }

    &:last-of-type {
      margin-bottom: 24px;
    }

    & > span {
      display: inline-block;
      width: 100%;
      border-bottom: 1px dashed rgb(223, 223, 223);
      margin: 0 15px;
      position: relative;
      bottom: 3px;
    }
  }

  & > button {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    border-radius: 18px;
    background: rgb(157, 213, 88);
    padding: 18px;
    width: 100%;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 70px;
    padding-right: 30px;

    img {
      transform: rotate(180deg);
    }
  }
`;

export default Basket;

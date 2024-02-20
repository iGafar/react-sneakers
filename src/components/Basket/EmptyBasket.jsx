import styled from "styled-components";

const EmptyBasket = ({ isPurchase, closeBasket }) => {
  return (
    <EmptyBasketStyle>
      <img
        src={isPurchase ? "/images/list.png" : "/images/box.png"}
        alt="image"
      />
      <h3>{isPurchase ? "Заказ оформлен!" : "Корзина пустая"}</h3>
      <p>
        {isPurchase
          ? "Ваш заказ скоро будет передан курьерской доставке"
          : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
      </p>
      <button onClick={() => closeBasket()}>Вернуться назад</button>
    </EmptyBasketStyle>
  );
};

const EmptyBasketStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    max-width: 120px;
    margin-bottom: 21px;
  }

  h3 {
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    margin-bottom: 9px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 40px;
    opacity: 0.4;
    text-align: center;
  }

  button {
    width: 245px;
    padding: 18px 0;
    border-radius: 18px;
    background: rgb(157, 212, 88);
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    position: relative;

    &::before {
      content: url("/icons/arrow.svg");
      position: absolute;
      left: 31px;
    }
  }
`;

export default EmptyBasket;

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToBasket, delFromBasket } from "store/slices/basketSlice";
import { addToFavorites, delFromFavorites } from "store/slices/favoritesSlice";

const Card = ({ item, isPurchased }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const basket = useSelector((state) => state.basket);

  function changeFavorites(el) {
    if (favorites.find((item) => item.id === el.id)) {
      dispatch(delFromFavorites(el.id));
    } else {
      dispatch(addToFavorites(el));
    }
  }

  function changeBasket(el) {
    if (basket.find((item) => item.id === el.id)) {
      dispatch(delFromBasket(el.id));
    } else {
      dispatch(addToBasket(el));
    }
  }

  return (
    <CardStyle>
      {!isPurchased && (
        <button
          className={favorites.find((el) => el.id === item.id) ? "heart" : ""}
          onClick={() => changeFavorites(item)}
        >
          <img
            src={`/icons/card-heart${
              favorites.find((el) => el.id === item.id) ? "-red" : ""
            }.svg`}
            alt="add to favorites"
          />
        </button>
      )}

      <img src={item.imageUrl} alt="sneakers" />
      <p>{item.title}</p>
      <div>
        <p>
          <span>Цена:</span> <b>{item.price}</b>
        </p>
        {!isPurchased && (
          <button
            className={basket.find((el) => el.id === item.id) ? "plus" : ""}
            onClick={() => changeBasket(item)}
          >
            <img
              src={`/icons/${
                basket.find((el) => el.id === item.id)
                  ? "check.svg"
                  : "plus.svg"
              }`}
              alt="add to basket"
            />
          </button>
        )}
      </div>
    </CardStyle>
  );
};

const CardStyle = styled.li`
  display: flex;
  flex-direction: column;
  width: 210px;
  padding: 20px 29px 34px;
  border: 2px solid rgb(243, 243, 243);
  border-radius: 40px;
  color: rgb(0, 0, 0);
  font-size: 14px;
  line-height: 17px;
  transition: all 200ms ease-in;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 14px 30px 0px rgba(0, 0, 0, 0.05);
  }

  & > img {
    max-width: 133px;
    margin-bottom: 14px;
  }

  button {
    padding: 10.5px;
    border: 1px solid rgb(242, 242, 242);
    border-radius: 8px;

    img {
      display: block;
      width: 11px;
      height: 11px;
    }
    &.heart {
      background-color: #fef0f0;
    }
    &.plus {
      background: linear-gradient(
        180deg,
        rgb(137, 240, 156),
        rgb(60, 199, 85) 100%
      );
    }
  }

  & > button {
    position: absolute;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }

  & > p {
    margin-bottom: 14px;
  }

  & > p {
    display: flex;
    flex-direction: column;
    gap: 2px;

    span {
      color: rgb(189, 189, 189);
      font-size: 11px;
      font-weight: 500;
      line-height: 13px;
      text-transform: uppercase;
    }
  }
`;

export default Card;

import { useDispatch } from "react-redux";
import styled from "styled-components";
import { delFromBasket } from "store/slices/basketSlice";

//              //props ↓
const BasketCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <BasketCardStyle>
      <img src={item.imageUrl} alt="sneakers" />
      <div>
        <h4>{item.title}</h4>
        <p>{item.price}</p>
      </div>
      <button onClick={() => dispatch(delFromBasket(item.id))}>
        <img src="/icons/plus.svg" alt="delete card" />
      </button>
    </BasketCardStyle>
  );
};

const BasketCardStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 325px;
  border: 1px solid rgb(243, 243, 243);
  border-radius: 20px;
  padding: 20px;

  & > img {
    width: 70px;
    height: 70px;
    margin-right: 20px;
  }

  & > div {
    margin-right: 12px;

    h4 {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 8px;
      min-width: 140px;
    }

    p {
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
    }
  }

  & > button {
    border: 1px solid rgb(219, 219, 219);
    border-radius: 8px;
    background: rgb(255, 255, 255);
    padding: 8px;

    img {
      display: block;
      transform: rotate(45deg);
    }
  }
`;

export default BasketCard;

import Card from "components/Cards/Card";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardsBlock = ({ data, title, isPurchased }) => {
  return (
    <CardsBlockStyle>
      <div className="container">
        <div>
          <Link to={"/"}>
            <img src="/icons/return.svg" alt="" />
          </Link>
          <h2>Мои {title}</h2>
        </div>

        <ul>
          {data?.map((item, index) => (
            <Card key={index} item={item} isPurchased={isPurchased} />
          ))}
        </ul>
      </div>
    </CardsBlockStyle>
  );
};

const CardsBlockStyle = styled.section`
  & > .container {
    margin-bottom: 40px;
    & > div {
      display: flex;
      align-items: center;
      margin-bottom: 40px;

      a {
        width: 35px;
        padding: 11px 0 11px;
        border: 1px solid rgb(242, 242, 242);
        border-radius: 8px;
        margin-right: 21px;

        img {
          display: block;
          margin: 0 auto;
        }
      }
    }

    ul {
      display: flex;
      justify-content: center;
      gap: 40px;
      flex-wrap: wrap;
    }
  }
`;

export default CardsBlock;

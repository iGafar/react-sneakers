import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = ({ openBasket }) => {
  return (
    <HeaderStyle>
      <div className="container">
        <Link to={"/"}>
          <LogoStyle>
            <picture>
              <img src="/icons/logo.png" alt="Logo" />
            </picture>
            <div>
              <p>REACT SNEAKERS</p>
              <p>Магазин лучших кроссовок</p>
            </div>
          </LogoStyle>
        </Link>
        <nav>
          <ul>
            <li>
              <button onClick={() => openBasket()}>
                <img src="/icons/basket.svg" alt="basket" />
                <p>Корзина</p>
              </button>
            </li>
            <li>
              <Link to={"/favorites"}>
                <img src="/icons/heart.svg" alt="favorites" />
                <p>Закладки</p>
              </Link>
            </li>
            <li>
              <Link to="/purchases">
                <img src="/icons/user.svg" alt="user" />
                <p>Профиль</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  border-bottom: 1px solid rgb(234, 234, 234);
  margin-bottom: max(4.5rem, 20px);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 4.3rem;
    padding-bottom: 4.3rem;
  }

  ul {
    display: flex;
    gap: 32px;
  }

  li > a,
  li > button {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgb(92, 92, 92);
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
  }

  @media (max-width: 700px) {
    li {
      display: flex;

      p {
        display: none;
      }
    }
  }
`;

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  div {
    color: rgb(0, 0, 0);
    font-size: max(2rem, 16px);
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase;

    p:last-child {
      color: rgb(157, 157, 157);
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
    }
  }
`;

export default Header;

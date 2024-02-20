import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = ({ openBasket }) => {
  return (
    <HeaderStyle>
      <div className="container">
        <Link to={"/"}>
          <LogoStyle>
            <img src="/icons/logo.png" alt="Logo" />
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
                <p>1200r</p>
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
  margin-bottom: 45.5px;

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
`;

const LogoStyle = styled.div`
  display: flex;
  gap: 16px;

  div {
    color: rgb(0, 0, 0);
    font-size: 20px;
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

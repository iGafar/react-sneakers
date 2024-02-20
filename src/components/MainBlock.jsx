import styled from "styled-components";

const MainBlock = () => {
  return (
    <MainBlockStyle>
      <div className="container">
        <div>
          <div>
            <h1>
              <span>Stan Smith,</span> Forever!
            </h1>
            <a href="#">Купить</a>
          </div>
          <img src="/images/main-back.jpeg" alt="Фон" />
        </div>
      </div>
    </MainBlockStyle>
  );
};

const MainBlockStyle = styled.section`
  margin-bottom: 39px;

  .container > div {
    border-radius: 20px;
    background: rgb(244, 239, 233);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 61px;
  }

  h1 {
    max-width: 240px;
    margin-bottom: 10px;

    span {
      color: rgb(139, 180, 60);
    }
  }

  a {
    display: inline-flex;
    padding: 14px 65px;
    background-color: rgb(165, 211, 100);
    border-radius: 110px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-transform: uppercase;
  }
`;

export default MainBlock;

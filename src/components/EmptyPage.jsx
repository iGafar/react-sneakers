import { Link } from "react-router-dom";
import styled from "styled-components";

const EmptyPage = ({ emptyData }) => {
  return (
    <EmptyPageStyle>
      <img src={emptyData.img} alt="смайл" />
      <h3>{emptyData.title}</h3>
      <p>{emptyData.text}</p>
      <Link to={"/"}>
        {" "}
        <img src="/icons/arrow.svg" alt="arrow" /> Вернуться назад
      </Link>
    </EmptyPageStyle>
  );
};

const EmptyPageStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;

  & > img {
    width: 70px;
    height: 70px;
    margin-bottom: 31px;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    margin-bottom: 11px;
  }

  p {
    opacity: 0.4;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 41px;
  }

  a {
    border-radius: 18px;
    background: rgb(157, 212, 88);
    padding: 18px 0;
    width: 245px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

export default EmptyPage;

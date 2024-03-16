import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import CardSkeleton from "components/Cards/CardSkeleton";
import Card from "./Card";

const SneakersBlock = () => {
  const [filtered, setFiltered] = useState("");
  const sneakers = useSelector((state) => state.sneakers.data);
  const loading = useSelector((state) => state.sneakers.loading);

  return (
    <SneakersBlockStyle>
      <div className="container">
        <div>
          <h2>Все кроссовки</h2>
          <label>
            <input
              type="text"
              placeholder="Поиск"
              onChange={(e) => setFiltered(e.target.value)}
            />
          </label>
        </div>
        <ul>
          {loading === "pending"
            ? new Array(12)
                .fill()
                .map((_, index) => <CardSkeleton key={index} />)
            : sneakers &&
              sneakers
                ?.filter((item) =>
                  filtered === ""
                    ? item
                    : item.title.toLowerCase().includes(filtered.toLowerCase())
                )
                .map((item) => <Card key={item.id} item={item} />)}
        </ul>
      </div>
    </SneakersBlockStyle>
  );
};

const SneakersBlockStyle = styled.section`
  padding-bottom: 40px;

  .container > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    label {
      border: 1px solid rgb(243, 243, 243);
      border-radius: 10px;
      position: relative;

      input {
        color: rgb(196, 196, 196);
        width: max(25rem, 150px);
        height: 45px;
        padding: 0 20px 0 46px;
        font-size: 14px;
        line-height: 17px;
      }

      &:before {
        content: "";
        position: absolute;
        width: 14.25px;
        height: 14.25px;
        left: 18px;
        top: 50%;
        background: url("/icons/search.svg") no-repeat center/cover;
        transform: translateY(-50%);
      }
    }
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem;
  }
`;

export default SneakersBlock;

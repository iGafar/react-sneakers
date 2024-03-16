import { createGlobalStyle } from "styled-components";
import Header from "components/Header";
import Router from "router/Router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSneakers } from "store/slices/sneakersSlice";
import Basket from "./components/Basket/Basket";

function App() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const openBasket = useCallback(() => {
    setIsOpen((prev) => !prev);
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchSneakers());
  }, [dispatch]);

  return (
    <>
      <Global isOpen={isOpen} />
      <Header openBasket={openBasket} />
      <Router />
      <Basket openBasket={openBasket} isOpen={isOpen} />
    </>
  );
}

const Global = createGlobalStyle`
	html {
		font-size: 10px;
	}
	body {
		font-family: 'Inter', sans-serif;
		line-height: normal;
		font-size: 14px;
		background-color: rgb(231, 246, 255);
		padding: 0 20px;
		overflow-y: ${(props) => (props.isOpen ? "hidden" : "auto")};
		overflow-x: hidden;
	}
	main {
		flex-grow: 1;
	}
	#root {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		max-width: 1080px;
		margin: 85px auto 0;
		border-radius: 20px 20px 0 0;
		box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
		background: rgb(255, 255, 255);
	}
	.container {
		margin: 0 auto;
		padding: 0 60px;
	}

	h1 {
		font-size: max(3.8rem, 24px);
		font-weight: 700;
		line-height: max(4.6rem, 24px);
	}

	h2 {
		font-size: max(3.2rem, 22px);
		font-weight: 700;
		line-height: 39px;
	}

	@media (max-width: 1200px) {
		html {
			font-size: 9px;
		}
	}

	@media (max-width: 1080px) {
		html {
			font-size: 8px;
		}

		.container {
			padding: 0 25px;
		}
	}

	@media (max-width: 980px) {
		html {
			font-size: 7px;
		}
	}

	@media (max-width: 850px) {
		html {
			font-size: 6px;
		}
		.container {
			padding: 0 15px;
		}
	}

	@media (max-width: 550px) {
		html {
			font-size: 5px;
		}
		body {
			padding: 0;
		}
		#root {
			margin-top: 0;
		}
	}
`;

export default App;

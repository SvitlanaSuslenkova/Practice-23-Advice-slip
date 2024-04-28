import { useState, useEffect } from "react";
import Button from "../components/Button";
import Dice from "../assets/icon-dice.svg";

function Home() {
  const [slip, setSlip] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response failed");
        }
        return response.json();
      })
      .then((data) => {
        setSlip(data);
        setTimeout(function () {
          setIsLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Fetch error.", error);
      });
  }, [clicked]);

  const handleOnClick = () => {
    setIsLoading(true);
    setClicked(!clicked);
  };

  return (
    <>
      {slip && !isLoading ? (
        <>
          <h2>Advice # {slip.slip.id}</h2>
          <h1>&#8220;{slip.slip.advice}&rdquo;</h1>
        </>
      ) : (
        <h2 className="loading">Throwing a dice...</h2>
      )}
      <Button
        onClick={handleOnClick}
        disabled={isLoading}
        className={`${isLoading ? "disableButton" : ""}`}
      >
        <img
          src={Dice}
          className={`dice ${isLoading ? "rotateDice" : ""}`}
          alt="click"
          onClick={handleOnClick}
        />
      </Button>

      <div className="divider"></div>
    </>
  );
}

export default Home;

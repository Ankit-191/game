import React from "react";
import Header from "../Header";
import Blance from "./Blance";
import Time from "./Time";
import GameHistroy from "./GameHistroy";

const Home = () => {
  return (
    <>
      <section>
        <Header />
        <Blance />
        <Time />
        <GameHistroy />
      </section>
    </>
  );
};

export default Home;

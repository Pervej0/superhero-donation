import React from "react";
import Budget from "./BudgetContainer/Budget";
import DonatorContainer from "./DonatorContainer/DonatorContainer";

const Main = () => {
  return (
    <main className="px-5">
      <Budget />
      <DonatorContainer />
    </main>
  );
};

export default Main;

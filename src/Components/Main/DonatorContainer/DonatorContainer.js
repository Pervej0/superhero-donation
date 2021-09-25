import React from "react";
import { useEffect, useState } from "react";
import Donator from "./Donator/Donator";
import ListedDonator from "./ListedDonator/ListedDonator";

const DonatorContainer = () => {
  // state for showing selected card-
  const [showDonors, setShowDonors] = useState([]);
  // state for extarnal siteEffect data storaged-
  const [donars, setDonars] = useState([]);

  useEffect(
    () =>
      fetch("./fakeData.json")
        .then((res) => res.json())
        .then((data) => setDonars(data)),
    []
  );

  // addDonate: click functionality
  const addDonate = (item, event) => {
    const newDonro = [...showDonors, item];
    setShowDonors(newDonro);
    const button = event.target;
    if (button.innerText === "Add Donate ") {
      button.innerText = "Added";
      button.classList.add("btn-danger");
      button.setAttribute("disabled", true);
    }
  };

  // to get totall added amount
  const reducer = (prev, current) => prev + current.donate;
  const collectedAmount = showDonors.reduce(reducer, 0);

  // removeClick: removeing slected donor-
  const removeClick = (id) => {
    const filtered = showDonors.filter((item) => item.id !== id);
    setShowDonors(filtered);
  };

  return (
    <section>
      <div className="row">
        <div className="col-9 row">
          {donars.map((donor) => (
            <Donator donor={donor} key={donor.id} addDonate={addDonate} />
          ))}
        </div>
        <div className="col-3">
          <h5 className="text-success">Totall Donor: {showDonors.length}</h5>
          <h5 className="text-success mb-4">
            Collected amount: $<small>{collectedAmount}</small>
          </h5>
          {showDonors.map((donor) => (
            <ListedDonator
              donor={donor}
              key={donor.id}
              removeClick={removeClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonatorContainer;

import React from "react";
import "./Donator.css";

const Donator = (props) => {
  const { name, born, img, nationality, donate } = props.donor;

  return (
    <div className="col-4 p-1">
      <div className="card p-3 donor-card">
        <div className="text-center">
          <img src={img} className="card-img-top" alt="..." />
        </div>
        <div className="card-body px-0">
          <h5 className="card-title mb-2">
            Name: <span className="text-success">{name}</span>
          </h5>
          <p className="m-0">
            Born: <span className="text-success">{born}</span>
          </p>
          <p className="m-0">
            Nationality: <span className="text-success">{nationality}</span>
          </p>
          <p>
            Donate:{" "}
            <span className="text-success h5">
              $<small>{donate}</small>
            </span>
          </p>
          <button
            className="btn btn-success"
            onClick={(event) => props.addDonate(props.donor, event)}
          >
            Add Donate <i className="fas fa-hand-holding-usd"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donator;

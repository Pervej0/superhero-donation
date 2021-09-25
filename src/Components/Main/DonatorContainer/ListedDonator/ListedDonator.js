import React from "react";
import "./ListedDonator.css";

const ListedDonator = (props) => {
  const { name, img } = props.donor;

  return (
    <>
      <div className="d-flex align-items-center justify-content-between border px-3 py-1 my-2">
        <div className="img-box">
          <img src={img} alt="" />
        </div>
        <div className="text-end">
          <h5>{name}</h5>
        </div>
        <div className="ms-2">
          <button
            className="btn btn-danger"
            onClick={() => props.removeClick(props.donor.id)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ListedDonator;

import React from "react";
import Modal from "./Modal";

const Card = ({ data }) => {
  return (
    <div className="card w-46 max-h-96 bg-base-100 shadow-xl">
      <h3 className="text-center mt-10 font-bold text-3xl">
        {data.capsule_serial}
      </h3>
      <div className="card-body">
        <h2 className="card-title capitalize">{data.capsule_id}</h2>
        <p className="text-sm">{data.details || "No details available"}</p>
        <p>
          <strong>Status: </strong>
          {data.status}
        </p>
        <p>
          <strong>Landings: </strong>
          {data.landings}
        </p>
        <p>
          <strong>Original Launch: </strong>{" "}
          {new Date(data.original_launch).toLocaleDateString()}
        </p>
        <div className="card-actions justify-end pt-10">
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            More Info
          </button>
          {/* <Modal data={data}/> */}
        </div>
      </div>
    </div>
  );
};

export default Card;

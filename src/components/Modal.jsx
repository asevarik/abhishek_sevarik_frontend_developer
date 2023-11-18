import React from "react";

const Modal = ({ data }) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{data.capsule_serial}</h3>
          <h2 className="card-title capitalize">{data.capsule_id}</h2>
          <p>
            <strong>Description: </strong>
            {data.details || "No details available"}
          </p>
          <p>
            <strong>Status:</strong> {data.status}
          </p>
          <p>
            <strong>Landings:</strong> {data.landings}
          </p>
          <p>
            <strong>Original Launch:</strong>{" "}
            {new Date(data.original_launch).toLocaleDateString()}
          </p>
          <p className="py-4 text-sm text-gray-600">
            Press ESC key or click on ✕ button to close
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;

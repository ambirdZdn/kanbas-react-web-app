import React from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function AssignmentControls() {
  const navigate = useNavigate();

  const handleNewAssignment = () => {
    navigate('/Kanbas/Courses/RS101/Assignments/new');
  };

  return (
    <div
      id="wd-assignments-controls"
      className="text-nowrap"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="input-group w-50 input-group-lg">
        <span className="input-group-text bg-white" id="search-addon">
          <BsSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </div>
      <br />
      <div>
        <button
          className="btn btn-lg btn-danger me-1 float-end"
          onClick={handleNewAssignment}
        >
          <BsPlus className="me-1" /> Assignment
        </button>
        <button className="btn btn-lg btn-secondary me-1 float-end">
          <BsPlus className="me-1" /> Group
        </button>
      </div>
    </div>
  );
}
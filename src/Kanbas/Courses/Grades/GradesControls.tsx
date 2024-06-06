import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

export default function GradesControls() {
  return (
    <div id="wd-grades-controls" className="ms-5">
      <br />
      <br />
      <div className="row">
        <div className="col">
          <label htmlFor="wd-student-names" className="fw-bold fs-6 mb-2">
            Student Names
          </label>
          <br />
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              id="wd-student-names"
              type="text"
              className="form-control me-1"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="col">
          <label htmlFor="wd-assignment-names" className="fw-bold fs-6 mb-2">
            Assignment Names
          </label>
          <br />
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              id="wd-assignment-names"
              type="text"
              className="form-control me-1"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <br />
      <button className="btn btn-lg btn-light me-3 mb-4 float-start">
        <FaFilter className="fs-4" /> Apply Filters
      </button>
    </div>
  );
}

import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { LiaFileExportSolid } from "react-icons/lia";

export default function Grades() {
    return (
      <div id="wd-grades" className="ms-5">
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
        <div className="mt-4">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>
                  A1 SETUP <br />
                  Out of 100
                </th>
                <th>
                  A2 HTML <br />
                  Out of 100
                </th>
                <th>
                  A3 CSS <br />
                  Out of 100
                </th>
                <th>
                  A4 BOOTSTRAP <br />
                  Out of 100
                </th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-danger">Student 1</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <td className="text-danger">Student 2</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <td className="text-danger">Student 3</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <td className="text-danger">Student 4</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                </tr>
                
            </tbody>
          </table>
        </div>
      </div>
    );
  }
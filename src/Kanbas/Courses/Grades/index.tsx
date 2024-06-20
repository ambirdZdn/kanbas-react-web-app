import React from "react";
import { FaSearch } from "react-icons/fa";
import { LiaFileExportSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { TbFileImport } from "react-icons/tb";
import { CiFilter } from "react-icons/ci";
import { grades, enrollments, assignments, users } from "../../Database";
import { useParams } from "react-router-dom";


export default function Grades() {
  
  const { cid } = useParams(); 

  const studentIds = enrollments
    .filter((enrollment) => enrollment.course === cid)
    .map((enrollment) => enrollment.user);

  const students = studentIds
    .map((studentId) => users.find((user) => user._id === studentId))
    .filter((student) => student !== undefined);

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

    return (
      <div id="wd-grades" className="ms-5">
    
        <button className="btn btn-lg btn-light me-2 float-end mt-3">
            <IoMdSettings className="fs-2"/>
        </button>

        <div className="dropdown d-inline me-3 float-end mt-3">
            <button className="btn btn-lg btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                <LiaFileExportSolid className="fs-4" /> Export
            </button>
            <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item" href="#">
                        <LiaFileExportSolid className="me-2 fs-5" />
                        Export as CSV
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <LiaFileExportSolid className="me-2 fs-5" />
                        Export as PDF
                    </a>
                </li>
            </ul>
        </div>
        <button className="btn btn-lg btn-light me-3 float-end mt-3">
            <TbFileImport className="fs-4" /> Import
        </button>
        <br />
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
        
        <button className="btn btn-lg btn-light me-3 mb-4 float-start ">
          <CiFilter className="fs-3" /> Apply Filters
        </button>
        <br />
        <br />
        <br />
        <div className="mt-4 table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr className="text-center">
              <th>Student Name</th>
              {courseAssignments.map((assignment) => (
                <th key={assignment._id}>
                  <strong>{assignment.title}</strong> <br />
                  <small>Out of 100</small>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              if (!student) {
                return null; 
              }

              return (
                <tr key={student._id}>
                  <td className="text-danger">{`${student.firstName} ${student.lastName}`}</td>
                  {courseAssignments.map((assignment) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === student._id &&
                        grade.assignment === assignment._id
                    );
                    return (
                      <td key={assignment._id} className="text-center">
                        {grade ? grade.grade : "-"}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          </table>
        </div>
      </div>
    );
  }
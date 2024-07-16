import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsGripVertical, BsTrash } from "react-icons/bs";
import { TbFilePencil } from "react-icons/tb";
import ProgressButton from "./ProgressButton";
import LessonControlButtons from "../Modules/LessonControlButtons";
import  { setAssignments, deleteAssignment } from "./reducer";
import * as client from "./client";
import { useEffect} from "react";
import AssignmentControls from "./AssignmentControls";


export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  
  useEffect(() => {
    fetchAssignments();
  }, []);

  const removeAssignment = async (assignmentId: string) => {
    if (window.confirm("Are you sure you want to remove this assignment?")) {
      await client.deleteAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Assignments</h2>
        <AssignmentControls />
      </div>

      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-light d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <IoMdArrowDropdown className="me-1" />
              <span>ASSIGNMENTS</span>
            </div>
            <ProgressButton />
          </div>

          <ul id="wd-assignment-list" className="wd-assignment-list list-group rounded-0">
            {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
              <li 
              key={assignment._id} 
              className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center"
              >
                <BsGripVertical className="me-2 fs-3" />
                <TbFilePencil className="me-3 fs-3" style={{ color: "green" }} />
                
                <div className="m-2 p-2">
                  <Link
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    style={{
                      color: "#212529",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    {assignment.title}
                  </Link>
                  <br />
                  <span style={{ color: "red" }}>{assignment.modules}</span> |{" "}
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    <strong>Not available until</strong>
                  </span> {assignment.available} |<br />
                  Due {assignment.due} | {assignment.points} pts
                </div>
                
                <div className="ms-auto">
                  <LessonControlButtons />
                </div>
                <div className="ms-auto">
                  <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="btn btn-sm btn-primary me-2">
                    Edit
                  </Link>
                  <button onClick={() => removeAssignment(assignment._id)} className="btn btn-sm btn-danger">
                    <BsTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>

    </div>
  );
}
import { IoMdArrowDropdown } from "react-icons/io";
import { BsGripVertical } from "react-icons/bs";
import { TbFilePencil } from "react-icons/tb";
import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ProgressButton from "./ProgressButton";

const assignments = [
  {
    id: 123,
    title: "A1",
    modules: "Multiple Modules",
    available: "May 6 at 12:00am",
    due: "May 13 at 11:59pm",
    points: 100,
  },
  {
    id: 456,
    title: "A2",
    modules: "Multiple Modules",
    available: "May 13 at 12:00am",
    due: "May 20 at 11:59pm",
    points: 100,
  },
  {
    id: 789,
    title: "A3",
    modules: "Multiple Modules",
    available: "May 20 at 12:00am",
    due: "May 27 at 11:59pm",
    points: 100,
  },
];

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <br />
      <AssignmentControls />
      <br />
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
          <ul
            id="wd-assignment-list"
            className="wd-assignment-list list-group rounded-0"
          >
            {assignments.map((assignment) => (
              <li
                key={assignment.id}
                className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center"
              >
                <BsGripVertical className="me-2 fs-3" />
                <TbFilePencil
                  className="me-3 fs-3"
                  style={{ color: "green" }}
                />
                
                <div className="m-2 p-2">
                  <a
                    className="wd-assignment-link"
                    href={`#/Kanbas/Courses/1234/Assignments/${assignment.id}`}
                    style={{
                      color: "#212529",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    {assignment.title}
                  </a>
                  <br />
                  <span style={{ color: "red" }}>{assignment.modules}</span>{" "}
                  |{" "}
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    <strong>Not available until</strong>
                  </span>{" "}
                  {assignment.available} |
                  <br />
                  Due {assignment.due} | {assignment.points} pts
                </div>
                <div className="ms-auto d-flex">
                  <LessonControlButtons />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

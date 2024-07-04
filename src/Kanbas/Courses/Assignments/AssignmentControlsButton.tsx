import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
export default function AssignmentControlsButtons(
    { assignmentsId, deleteAssignments, editAssignments }: { assignmentsId: string;
         deleteAssignments: (assignmentsId: string) => void; 
         editAssignments: (assignmentsId: string) => void;
        } ) {
    return (
        <div className="float-end">
            <FaPencil onClick={() => editAssignments(assignmentsId)} className="text-primary me-3" />
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignments(assignmentsId)}/>
        </div>
      );
    }

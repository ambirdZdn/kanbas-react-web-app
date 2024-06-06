import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function ProgressButton() {
  return (
    <div className="d-flex justify-content-end align-items-center">
      <button className="rounded-pill me-2">
        40% of Total
      </button>
      <BsPlus className="fs-2 me-2" />
      <IoEllipsisVertical className="fs-2" />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import './index.css';
import * as client from './client';

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);

  const [assignment, setAssignment] = useState({
    _id: '',
    title: 'New Assignment',
    description: 'New Assignment Description',
    points: 100,
    due: '',
    available: '',
    availableUntil: '',
    course: cid || '',
  });

  useEffect(() => {
    if (aid) {
      const existingAssignment = assignments.find((a: any) => a._id === aid);
      if (existingAssignment) {
        setAssignment(existingAssignment);
      } else {
        client.findAssignmentsForCourse(aid).then((assignment) => {
          setAssignment(assignment);
        });
      }
    }
  }, [aid, assignments]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAssignment(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (aid) {
      client.updateAssignment(assignment).then((updatedAssignment) => {
        dispatch(updateAssignment(updatedAssignment));
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
      });
    } else {
      client.createAssignment(cid as string, assignment).then((newAssignment) => {
        dispatch(addAssignment(newAssignment));
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
      });
    }
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div className="container p-5">
      <div className="mb-2">
        <label htmlFor="title" className="fw-bold">Assignment Name</label>
        <input
          id="title"
          name="title"
          className="form-control"
          value={assignment.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="fw-bold">Description</label>
        <textarea
          id="description"
          name="description"
          className="form-control"
          value={assignment.description}
          onChange={handleInputChange}
        />
      </div>

      <div className="row mb-3">
        <label htmlFor="points" className="col-sm-4 col-form-label text-end">Points</label>
        <div className="col-sm-8">
          <input
            type="number"
            className="form-control"
            id="points"
            name="points"
            value={assignment.points}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="due" className="col-sm-4 col-form-label text-end">Due Date</label>
        <div className="col-sm-8">
          <input
            type="date"
            className="form-control"
            id="due"
            name="due"
            value={assignment.due}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="available" className="col-sm-4 col-form-label text-end">Available from</label>
        <div className="col-sm-8">
          <input
            type="date"
            className="form-control"
            id="available"
            name="available"
            value={assignment.available}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="availableUntil" className="col-sm-4 col-form-label text-end">Available until</label>
        <div className="col-sm-8">
          <input
            type="date"
            className="form-control"
            id="availableUntil"
            name="availableUntil"
            value={assignment.availableUntil}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <br />
        <br />

        <div className="row mb-3">
          <div className="col-sm-4"></div>
          <div className="col-sm-8 text-end">
            <button className="btn btn-lg me-1 square-button custom-button-cancel text-center" onClick={handleCancel}>Cancel</button>
            <button className="btn btn-lg square-button custom-button-save text-center" onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
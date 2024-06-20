import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as db from "../../Database";
import './index.css';

export default function AssignmentEditor() {
  const [submissionType, setSubmissionType] = useState('Online');
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const assignment = db.assignments.find((assignment) => assignment.course === cid && assignment._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  const handleSubmissionTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSubmissionType(event.target.value);
  };
  
  return (
    <div className="container p-5">
      <div id="wd-name" className="mb-2">
        <label htmlFor="wd-name" className="fw-bold">Assignment Name</label><br /><br />
        <input id="wd-name" className="form-control border form-border-gray" value={assignment.title} readOnly />
      </div>

      <div className="form-control border form-border-gray mb-3">
        <p>{assignment.description}</p>
        <p>The assignment is <span className="text-danger">available online.</span></p>
        <p>Submit a link to the landing page of your Web application running on Netlify.</p>
        <p>The landing page should include the following:</p>
        <ul>
          <li>Your full name and section</li>
          <li>Links to each of the lab assignments</li>
          <li>Link to the Kanbas application</li>
          <li>Links to all relevant source code repositories</li>
        </ul>
        <p>The Kanbas application should include a link to navigate back to the landing page.</p>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-sm-4 col-form-label text-end">Points</label>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="wd-points" value={assignment.points} readOnly />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-sm-4 col-form-label text-end">Assignment group</label>
        <div className="col-sm-8">
          <select id="wd-group" className="form-select">
            <option selected value="assignments">ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-display-grade-as" className="col-sm-4 col-form-label text-end">Display Grade As</label>
        <div className="col-sm-8">
          <select id="wd-display-grade-as" className="form-select">
            <option selected value="p">Percentage</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-4 col-form-label text-end">
          <label htmlFor="wd-submission-type">Submission Type</label>
        </div>
        <div className="col-sm-8">
          <div className="form-control border form-border-gray">
            <select id="wd-submission-type" className="form-select border form-border-gray mb-2" value={submissionType} onChange={handleSubmissionTypeChange}>
              <option value="Online">Online</option>
            </select>
            
            {submissionType === 'Online' && (
              <div>
                <label><strong>Online Entry options</strong></label>
                <div className="my-3">
                  <div>
                    <input type="checkbox" className="form-check-input mr-3 border form-border-gray" name="check-entry-options" id="wd-text-entry" />
                    <label htmlFor="wd-text-entry">Text entry</label>
                  </div>
                  <div>
                    <input type="checkbox" className="form-check-input border form-border-gray" name="check-website-url" id="wd-website-url" />
                    <label htmlFor="wd-website-url">Website URL</label>
                  </div>
                  <div>
                    <input type="checkbox" className="form-check-input border form-border-gray" name="check-media-recordings" id="wd-media-recordings" />
                    <label htmlFor="wd-media-recordings">Media Recordings</label>
                  </div>
                  <div>
                    <input type="checkbox" className="form-check-input border form-border-gray" name="check-student-annotation" id="wd-student-annotation" />
                    <label htmlFor="wd-student-annotation">Student Annotations</label>
                  </div>
                  <div>
                    <input type="checkbox" className="form-check-input border form-border-gray" name="check-file-upload" id="wd-file-upload" />
                    <label htmlFor="wd-file-upload">File Upload</label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-assign-to" className="col-sm-4 col-form-label text-end">Assign to</label>
        <div className="col-sm-8">
          <input id="wd-assign-to" className="form-control" placeholder="Everyone" />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-due-date" className="col-sm-4 col-form-label text-end">Due</label>
        <div className="col-sm-8">
          <input id="wd-due-date" className="form-control" value={assignment.due} readOnly />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-available-from" className="col-sm-4 col-form-label text-end">Available from</label>
        <div className="col-sm-8">
          <input id="wd-available-from" className="form-control" value={assignment.available} readOnly />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="available-until" className="col-sm-4 col-form-label text-end">Until</label>
        <div className="col-sm-8">
          <input id="available-until" className="form-control" type="date" value="2024-05-20" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-4"></div>
        <div className="col-sm-8 text-end">
          <button className="btn btn-lg me-1 square-button custom-button-cancel text-center">Cancel</button>
          <button className="btn btn-lg square-button custom-button-save text-center">Save</button>
        </div>
      </div>
    </div>
  );
}

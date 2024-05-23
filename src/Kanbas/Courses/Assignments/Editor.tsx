
import React, { useState } from 'react';
export default function AssignmentEditor() {
const assignmentDescription = `The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
    · Your full name and section
    · Links to each of the lab assignments
    · Link to the Kanbas application
    · Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.
  `;

  const [submissionType, setSubmissionType] = useState('Online');

  const handleSubmissionTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSubmissionType(event.target.value);
  };


    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name" style={{ fontSize: '20px', fontWeight: 'bold' }}>Assignment Name</label>
        <br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea
        id="wd-description"
        style={{ width: '500px', height: '200px' }}
        value={assignmentDescription}
        readOnly/>
        <br />
        <table>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                    <input id="wd-points" value={100} />
                </td> 
            </tr>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-group">Assignment Group</label>
                </td>
                <td>
                    <select id="wd-group" >
                        <option selected value="Assignment 1">Assignment 1</option>
                        <option value="Assignment 2">Assignment 2</option>
                        <option value="Assignment 3">Assignment 3</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-display-grade-as">Display Grade as</label>
                </td>
                <td>
                    <select id="wd-display-grade-as" >
                        <option selected value="Percentage">Percentage</option>
                        <option value="Decimal">Decimal</option>
                        <option value="Letter">Letter</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                    <select id="wd-submission-type" value={submissionType} onChange={handleSubmissionTypeChange}>
                        <option selected value="Online">Online</option>
                        <option value="On Paper">On Paper</option>
                    </select>
                </td>
            </tr>
            {submissionType === 'Online' && (
            <>
              <tr>
                <td align="right" valign="top">
                  <label htmlFor="wd-text-entry">Text Entry</label>
                </td>
                <td>
                  <input type="checkbox" id="wd-text-entry" />
                </td>
              </tr>
              <tr>
                <td align="right" valign="top">
                  <label htmlFor="wd-website-url">Website URL</label>
                </td>
                <td>
                  <input type="checkbox" id="wd-website-url" />
                </td>
              </tr>
              <tr>
                <td align="right" valign="top">
                  <label htmlFor="wd-media-recordings">Media Recordings</label>
                </td>
                <td>
                  <input type="checkbox" id="wd-media-recordings" />
                </td>
              </tr>
              <tr>
                <td align="right" valign="top">
                  <label htmlFor="wd-student-annotation">Student Annotation</label>
                </td>
                <td>
                  <input type="checkbox" id="wd-student-annotation" />
                </td>
              </tr>
              <tr>
                <td align="right" valign="top">
                  <label htmlFor="wd-file-upload">File Upload</label>
                </td>
                <td>
                  <input type="checkbox" id="wd-file-upload" />
                </td>
              </tr>
              </>
            )}
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-assign-to">Assign Assign to</label>
                </td>
                <td>
                    <input id="wd-assign-to" value={"Everyone"}/> 
                </td>
            </tr>

            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-due-date">Due</label>
                </td>
                <td>
                    <input type="date" id="wd-due-date" value={"2024-05-20"} />
                </td>
            </tr>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-available-from">Available from</label>
                    <label htmlFor="wd-available-until">Until</label>
                </td>
                <td>
                    <input type="date" id="wd-available-from" value={"2024-05-06"} />
                    <input type="date" id="wd-available-until" value={"2024-05-20"} />
                </td>
            </tr>

        </table>
  </div>
  );}
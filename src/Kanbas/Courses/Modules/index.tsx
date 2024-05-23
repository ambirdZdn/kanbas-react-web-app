export default function Modules() {
    const handleCollapseAll = () => {
        // Logic to collapse all modules
        console.log('Collapse All clicked');
      };
    
    const handleViewProgress = () => {
        // Logic to view progress
        console.log('View Progress clicked');
    };

    return (
    <div>
        <div id="wd-button">
        <button onClick={handleCollapseAll}>Collapse All</button>
        <button onClick={handleViewProgress}>View Progress</button>
        <button id="wd-publish">Publish</button> 
        <button id="wd-add-module">+ Add Module</button>
    </div>
        {/* Collapse All button, View Progress button, etc. */}
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li> 
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignments to Netlify</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
  </div> );}
export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
            <div className="wd-dashboard-course">
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                    <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1234/Home">
                        CS1234 React JS
                    </a>
                    <p className="wd-dashboard-course-title">
                        Full Stack software developer
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                </div>
            </div>
            <div className="wd-dashboard-course">
                <img src="/images/5002.jpg" width={200} />
                <div>
                    <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1235/Home">
                        CS5002 Discrete Structures 
                    </a>
                    <p className="wd-dashboard-course-title">
                        Discrete Mathematics
                    </p>
                    <a href="#/Kanbas/Courses/1235/Home"> Go </a>
                </div>
            </div>
            <div className="wd-dashboard-course">
                <img src="/images/5004.jpg" width={200} />
                <div>
                    <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1236/Home">
                        CS5004 Object Oriented Design 
                    </a>
                    <p className="wd-dashboard-course-title">
                        Java Programming
                    </p>
                    <a href="#/Kanbas/Courses/1236/Home"> Go </a>
                </div>
            </div>
            <div className="wd-dashboard-course"> 
                <img src="/images/blue.jpg" width={200} />
                <div>
                    <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1237/Home">
                        CS5005 Recitation for CS5004
                    </a>
                    <p className="wd-dashboard-course-title">
                        Recitation
                    </p>
                    <a href="#/Kanbas/Courses/1237/Home"> Go </a>
                </div>
            </div>
            <div className="wd-dashboard-course">
                <img src="/images/5008.jpg" width={200} />
                <div>
                    <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1238/Home">
                        CS5008 Data Structures 
                    </a>
                    <p className="wd-dashboard-course-title">
                        Data Structures, algorithms, and their application
                    </p>
                    <a href="#/Kanbas/Courses/1238/Home"> Go </a>
                </div>
            </div>
            <div className="wd-dashboard-course">
                <img src="/images/blue.jpg" width={200} />
                <div>
                    <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1239/Home">
                        CS5009 Recitation for CS5008
                    </a>
                    <p className="wd-dashboard-course-title">
                        Recitation
                    </p>
                    <a href="#/Kanbas/Courses/1239/Home"> Go </a>
                </div>
            </div>
            <div className="wd-dashboard-course">
                <img src="/images/5610.jpg" width={200} />
                <div>
                    <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1240/Home">
                        CS5610 Web Development
                    </a>
                    <p className="wd-dashboard-course-title">
                        Web Development
                    </p>
                    <a href="#/Kanbas/Courses/1240/Home"> Go </a>
                </div>
            </div>
        </div>
      </div>
  );}
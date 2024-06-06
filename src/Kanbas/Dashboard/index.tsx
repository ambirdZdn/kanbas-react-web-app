export default function Dashboard() {
    return (
      <div id="wd-dashboard" style={{ marginLeft: '30px' }}>
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

        <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

                <div className="wd-dashboard-course col" style={{maxWidth: "270px", minWidth: "250px", margin: '15px 0' }}>
                    <div className="card" style={{ aspectRatio: '16/9' }}>
                        <img src="/images/reactjs.jpg " style={{ width: '100%', height: '150px' }} />
                        <div className="card-body">
                            <a className="wd-dashboard-course-link card-title "
                                href="#/Kanbas/Courses/1234/Home"
                                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                CS1234 React JS
                            </a>
                            <p className="wd-dashboard-course-title card-text">
                                Full Stack software developer
                            </p>
                            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                        </div>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{maxWidth: "270px", minWidth: "250px", margin: '15px 0'  }}>
                    <div className="card" style={{ aspectRatio: '16/9' }}>
                        <img src="/images/5002.jpg" style={{ width: '100%', height: '150px' }} />
                        <div className="card-body">
                            <a href="#/Kanbas/Courses/1235/Home" 
                            className="card-title wd-dashboard-course-link"
                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                CS5002 Discrete Structures
                            </a>
                            <p className="card-text wd-dashboard-course-title">
                                Discrete Mathematics
                            </p>
                            <a href="#/Kanbas/Courses/1235/Home" className="btn btn-primary">Go</a>
                        </div>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{maxWidth: "270px", minWidth: "250px", margin: '15px 0'  }}>
                    <div className="card" style={{ aspectRatio: '16/9' }}>
                        <img src="/images/5004.jpg" style={{ width: '100%', height: '150px' }} />
                        <div className="card-body">
                            <a href="#/Kanbas/Courses/1236/Home" 
                            className="card-title wd-dashboard-course-link"
                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                CS5004 OOD
                            </a>
                            <p className="card-text wd-dashboard-course-title">
                                Java Programming
                            </p>
                            <a href="#/Kanbas/Courses/1236/Home" className="btn btn-primary">Go</a>
                        </div>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ maxWidth: "270px", minWidth: "250px", margin: '15px 0'  }}>
                    <div className="card" style={{ aspectRatio: '16/9' }}>
                        <img src="/images/blue.jpg" style={{ width: '100%', height: '150px' }} />
                        <div className="card-body">
                            <a href="#/Kanbas/Courses/1237/Home" 
                            className="card-title wd-dashboard-course-link"
                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                CS5005 Recitation
                            </a>
                            <p className="card-text wd-dashboard-course-title">
                            Recitation
                            </p>
                            <a href="#/Kanbas/Courses/1237/Home" className="btn btn-primary">Go</a>
                        </div>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ maxWidth: "270px", minWidth: "250px", margin: '15px 0'  }}>
                    <div className="card" style={{ aspectRatio: '16/9' }}>
                        <img src="/images/5008.jpg" style={{ width: '100%', height: '150px' }} />
                        <div className="card-body">
                            <a href="#/Kanbas/Courses/1238/Home" 
                            className="card-title wd-dashboard-course-link"
                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                CS5008 Data Structures
                            </a>
                            <p className="card-text wd-dashboard-course-title">
                                Data Structures
                            </p>
                            <a href="#/Kanbas/Courses/1238/Home" className="btn btn-primary">Go</a>
                        </div>
                    </div>
                </div>

                <div className="wd-dashboard-course col" 
                    style={{ maxWidth: "270px", minWidth: "250px", margin: '15px 0'  }}>
                    <div className="card" style={{ aspectRatio: '16/9' }}>
                        <img src="/images/blue.jpg" style={{ width: '100%', height: '150px' }} />
                        <div className="card-body">
                            <a href="#/Kanbas/Courses/1239/Home" 
                            className="card-title wd-dashboard-course-link"
                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                            CS5009 Recitation
                            </a>
                            <p className="card-text wd-dashboard-course-title">
                            Recitation
                            </p>
                            <a href="#/Kanbas/Courses/1239/Home" className="btn btn-primary">Go</a>
                        </div>
                    </div>
                </div>

                <div className="wd-dashboard-course col" 
                    style={{maxWidth: "270px", minWidth: "250px", margin: '15px 0'  }}>
                    <div className="card" style={{ aspectRatio: '16/9' }}>
                        <img src="/images/5610.jpg" style={{ width: '100%', height: '150px' }} />
                        <div className="card-body">
                            <a href="#/Kanbas/Courses/1240/Home" 
                            className="card-title wd-dashboard-course-link"
                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                            CS5610 Web Development
                            </a>
                            <p className="card-text wd-dashboard-course-title">
                                Web Development
                            </p>
                            <a href="#/Kanbas/Courses/1240/Home" className="btn btn-primary">Go</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );}
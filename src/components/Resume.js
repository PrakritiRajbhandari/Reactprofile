import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="resume">
                <div className="container">
                    <div className="row education">

                        <div className="col-md-3 mt-5 ">
                            <h1><span>Education</span></h1>
                        </div>

                        <div className="col-md-9 ">
                            {
                                resumeData.education && resumeData.education.map((item) => {
                                    return (
                                        <div className="row item">
                                            <div className="twelve columns my-5">
                                                <h3>{item.UniversityName}</h3>
                                                <p className="info">
                                                    {item.specialization}
                                                    <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                                                <p>
                                                    {item.Achievements}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row work">
                        <div className="col-md-3 mt-5 ">
                            <h1><span>Work</span></h1>
                        </div>

                        <div className="col-md-9">
                            {
                                resumeData.work && resumeData.work.map((item) => {
                                    return (
                                        <div className="row item">
                                            <div className="twelve columns my-5">
                                                <h3>{item.CompanyName}</h3>
                                                <p className="info">
                                                    {item.specialization}
                                                    <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                                                <p>
                                                    {item.Achievements}
                                                </p>
                                            </div>

                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>


                    <div className="row skill">

                        <div className="col-md-3 mt-5">
                            <h1><span>Skills</span></h1>
                        </div>

                        <div className="col-md-9">

                            <p>
                                {resumeData.skillsDescription}
                            </p>

                            <div className="bars my-5">

                                <ul className="skills">
                                    {
                                        resumeData.skills && resumeData.skills.map((item) => {
                                            return (
                                                <li>
                                                    <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                                                    </span><em>{item.skillname}</em>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
        );
    }
}
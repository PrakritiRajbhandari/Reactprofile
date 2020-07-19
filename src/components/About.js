import React, { Component } from 'react';
export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="about">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">

                            <img className="profile-pic" src="images/img.jpg" alt="" />

                        </div>

                        <div className="col-md-6 my-5">

                            <h2>About Me</h2>
                            <p>
                                {
                                    resumeData.aboutme
                                }
                            </p>

                            <div className="row">

                                <div className="col-md-6">

                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>{resumeData.name}</span>
                                        <br></br>
                                        <span>
                                            {resumeData.address}
                                        </span>
                                        <br></br>
                                        <span>{resumeData.website}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
import React, { Component } from 'react';
export default class ContactUs extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 my-3 text-center">

                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{resumeData.name}</span>
                                <br></br>
                                <span>
                                    {resumeData.address}
                                </span>
                                <br></br>

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

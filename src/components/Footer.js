import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="social-links">
                                {
                                    resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                                        return (
                                            <li>
                                                <a href={item.url}>
                                                    <i className={item.className} />
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                        </div>
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#header"><i className="icon-up-open" /></a></div>
                    </div>
                </div>
            </footer>
        );
    }
}
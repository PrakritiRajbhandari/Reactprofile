/*import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>

                <header id="header">
                    <div className="container">
                        <div className="row banner">
                            <div className="banner-text">hi
                            <h1 className="responsive-headline">I am</h1>
                                <h3>I am a {resumeData.role}.{resumeData.roleDescription}
                                </h3>
                                <hr />
                                <ul className="social">
                                    {
                                        resumeData.socialLinks && resumeData.socialLinks.map(item => {
                                            return (
                                                <li key={item.name}>
                                                    <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                                </li>
                                            )
                                        }
                                        )
                                    }
                                </ul>
                            </div>
                        </div>

                        <p className="scrolldown">
                            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                        </p>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}*/


import React, { Component } from 'react';
export default class header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 my-5 text-center">
                            <div className="banner-text ">Prakriti Rajbhandari
                            <h1 className="responsive-headline">I am</h1>
                                <h3>{resumeData.role}.{resumeData.roleDescription}
                                </h3>

                            </div>


                            <p className="scrolldown">
                                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
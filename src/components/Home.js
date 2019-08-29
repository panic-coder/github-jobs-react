import React, { Component } from "react";
// import Featuredjobs from "./Featuredjobs";
// import Position from "./Positon";
// import HowItWorks from "./HowItWorks";
import HttpService from "../services/HttpService";

const httpService = new HttpService();

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: true,
            position: false,
            howItWorks: false
        }
    }
    featuredJobs() {
        // console.log("featuredJobs");
        // this.setState({
        //     jobs: true,
        //     position: false,
        //     howItWorks: false
        // });
        httpService.jobsHttp()
            .then((result) => {
                console.log("Result : ", result)
            })
            .catch((error) => {
                console.log("Error : ", error)
            })
        this.props.history.push('/home/jobs');
    }

    postJobs() {
        // console.log("postJobs")
        // this.setState({
        //     jobs: false,
        //     position: true,
        //     howItWorks: false
        // });
        this.props.history.push('/home/position');
    }

    howItWorks() {
        // console.log("howItWorks");
        // this.setState({
        //     jobs: false,
        //     position: false,
        //     howItWorks: true
        // })
        this.props.history.push('/home/how-it-works');
    }

    render() {
        // console.log(this.props.children);
        return (
            <div>
                <div className="toolbar-header">
                    <div className="wrapper">
                        <div className="toolbar-text"></div>
                        <div className="right-text">
                            <div className="all-jobs" onClick={() => this.featuredJobs()}>
                                All Jobs
                        </div>
                            <div className="all-jobs" onClick={() => this.postJobs()}>
                                Post a Job
                        </div>
                            <div className="all-jobs" onClick={() => this.howItWorks()}>
                                How it works
                        </div>
                        </div>
                    </div>
                </div>
                <div className="space-div">
                
                  
                </div>

            </div>
        )
    }
}

export default Home;
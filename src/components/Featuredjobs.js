import React, { Component } from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';

class Featuredjobs extends Component {
    // constructor() {

    // }

    render() {

        // console.log("Featured Jobs");
        return (

            <div className="job-main-div">
                <div className="outer-div">
                    <div className="job-description">
                        <div className="job-div">
                            Job Description
                    </div>
                        <div>
                            <input className="input"
                                type="text"
                                placeholder="Filter by title, benefits, companies, expertise"
                            ></input>
                        </div>
                    </div>
                    <div>
                        <div className="job-description">
                            <div className="job-div">
                                Location
                    </div>
                            <div>
                                <input className="input-location"
                                    type="text"
                                    placeholder="Filter by city, state, zip code or country"
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="checkbox-div">
                        <div className="input-checkbox">
                            <input type="checkbox" />
                        </div>
                        <div className="input-text">
                            Full Time Only
                        </div>
                    </div>
                    <div className="search-button-div">
                        <button className="search-button">Search</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Featuredjobs;
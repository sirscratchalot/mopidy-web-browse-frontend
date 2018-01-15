import React from "react"
import PropTypes from "prop-types"
const MopidyServer = ({ info }) => (
    <div className="MopidyView">
        <div className="left">
            <h4>{info.name}</h4>
            <a href={info.urls[0]}>Go to server</a>
        </div>
        <div className="right"></div>
        <p>{JSON.stringify(info)}</p>
    </div>)

export default MopidyServer
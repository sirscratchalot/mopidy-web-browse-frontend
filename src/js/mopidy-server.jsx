import React from "react"
import PropTypes from "prop-types"
const MopidyServer = ({ info, links, iframeListener }) => (
    <div className="mopidyView">
        <div className="headerDiv">
            <h4>{info.name}</h4>
            <a href={info.urls[0]}>Go to server</a>
        </div>
        <div className="linksDiv">
            {links.map((link) =>
                <input key={link.name} type="button" onClick={function () { iframeListener(info.urls[0] + link.path) }}
                    value={info.name + " - " + link.name} />

            )}
    </div>
    </div >)

export default MopidyServer
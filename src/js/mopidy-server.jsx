import React from "react"
import PropTypes from "prop-types"
const MopidyServer = ({ url, name, port, httpEnabled, defaultGui }) => (
    <div>
        <a href={url}>{name}</a>
    </div>)

MopidyServer.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    httpEnabled: PropTypes.bool.isRequired,
    port: PropTypes.number.isRequired,
    defaultGui: PropTypes.string.isRequired
}
export default MopidyServer
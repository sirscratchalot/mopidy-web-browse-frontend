import React from 'react'
import MopidyList from './mopidylist.jsx'
const Footer = ({ infoList, uis, iframeListener }) =>
    <div className="footer">
        <MopidyList infoList={infoList} uis={uis} iframeListener={iframeListener} />
    </div>;
export default Footer;
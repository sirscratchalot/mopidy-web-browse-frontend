import React from "react";
import MopidyServer from "../mopidy-server.jsx";
const mopidyType = "_mopidy-http._tcp.local.";
const httpType = "_http._tcp.local.";

const MopidyList  = ({infoList,uis,iframeListener}) => 
  { 
        const servers =
            infoList.map((info) => 
            <MopidyServer info={info} iframeListener = {iframeListener}
             key={info.key} links={uis[info.key] ? uis[info.key] : []}/>)
        return <div className="MopidyList">
            {servers}
        </div>
    };


export default MopidyList;
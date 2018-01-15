import React from "react";
import MopidyServer from "../mopidy-server.jsx";
const mopidyType = "_mopidy-http._tcp.local.";
const httpType = "_http._tcp.local.";

//function groupMopidy(infoList) {
    ////Object with array in it is sent instead of simply array.
    //let mopidyInfos = infoList.filter(info => info.type == mopidyType)
    //let groupedInfo = mopidyInfos.map(mInfo => {
        //let matchingHttp = infoList.filter(info =>
            //info.name == mInfo.name && info.type == httpType);
        //return {
            //mInfo: mInfo,
            //httpInfos: matchingHttp
        //};
    //})
    //return groupedInfo;
//}
const MopidyList  = ({infoList}) => 
  { 
        const servers =
            infoList.map((info) => <MopidyServer info={info}
             key={info.key} />)
        return <div className="MopidyList">
            {servers}
        </div>
    };


export default MopidyList;
import React from 'react';
import Footer from './footer.jsx';

const FrameView = ({url,infoList,uis,iframeListener}) => (
   <div className="iframeWrapper fill">
   <iframe className="currentView" src={url}></iframe>
    <Footer infoList = {infoList} uis={uis} iframeListener={iframeListener}/>
   </div>
)
export default FrameView;
import React from 'react';
import MopidyServer from './mopidy-server.jsx';

const ServiceView = ({infoMap}) => (
     <div class="ServiceView">
      {infoMap.keys.map( (keys,index) =>(<div class="ServiceWrapper">
      <MopidyServer
       url={infoMap[key].url+":"+infoMap[key].port}
       name={infoMap[key].name}

      />
      </div>))}
     </div>
)
import React from 'react';
import {AppBar} from 'material-ui';

const appBarHOC = (WrappedComponent) => (props) => {
  return (
    <div>
      <AppBar title="Retro Board" onTitleClick={() => props.history.push("/")}/>
      <WrappedComponent {...props}/>
    </div>
  )
}

export default appBarHOC;
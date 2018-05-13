import React from 'react';
import {FlatButton} from 'material-ui';
import {withRouter} from 'react-router-dom';

class Home extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  componentDidMount(){
    console.log('Home -> ComponentDidMount');
  }

  render(){
    return (
      <div>
        <FlatButton label="Join" primary={true} onClick={() => this.nextPath('/join')}/>
        <FlatButton label="Create" primary={false} onClick={() => this.nextPath('/create')}/>
      </div>
    )
  }
}

export default withRouter(Home);

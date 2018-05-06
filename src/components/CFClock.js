import React, { Component} from 'react'
import CClock from './CClock';

class CFClock extends Component {
  render() {
    return (
      <div>
        <div style={{"justifyContent":"center"}} className="outerDiv">
          <div
            id="13:13"
            style={{"width":707.7064208984375,"marginLeft":-0.2935791015625,"height":null,"marginTop":109,"marginBottom":244.880126953125,"minHeight":289.119873046875,"backgroundColor":"rgba(255, 255, 255, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <CClock {...this.props} nodeId="13:13" />
          </div>
        </div>
      </div>
    );
  }
}
export default CFClock;


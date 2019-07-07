// React
import React from 'react';
import styles from '../css-modules/Instructions.module.css';

class Instructions extends React.Component {
  state = {
    showInstructions: true
  }

  render() {
    return (
      <div className={this.state.showInstructions ? styles.instructionsWrapper : null} style={{display: !this.state.showInstructions && 'none'}}>
        <div className={styles.titleWrapper}>
          <h4>How To Play</h4>
        </div>
        <div className={styles.instructions}>
          <div>
            <p><strong> On Desktop: </strong></p>
            <p> <i className="fa fa-mouse-pointer"></i> Right Click to set flags</p>
            <p><strong> On Mobile: </strong></p>
            <p> <i className="fa fa-hand-o-up" aria-hidden="true"></i> Hold to set flags </p>
          </div>
          <div>
            <button onClick={() => this.setState({showInstructions: false})}>Ok</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructions;

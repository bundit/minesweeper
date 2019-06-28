// React
import React from 'react';

// CSS
import styles from '../css-modules/Square.module.css'

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  // Variable and event listeners to handle long touch on mobile devices
  pressTimer;
  handleTouchStart() {
    this.pressTimer = setTimeout(() => this.props.handleFlag(this.props.index), 300);
    return false;
  }
  handleTouchEnd() {
    clearTimeout(this.pressTimer);
    return false;
  }

  render() {
    let valueToDisplay;
    const thisSquare = this.props.state;
    if (!thisSquare) return <button></button>;

    if (thisSquare && thisSquare.isRevealed) {
      valueToDisplay = thisSquare.value ? thisSquare.value : null;
    }
    else if (thisSquare && thisSquare.isFlagged) {
      valueToDisplay = <img className={styles.flag} src="/favicon.ico" alt="flag"/>
    }

    const squareStyle = this.props.index % 2 ? styles.oddSquare : styles.evenSquare;

    return (
      <button
        className={!thisSquare.isRevealed ? squareStyle : styles.revealedSquare}
        onClick={() => this.props.handleClick(this.props.index)}
        onContextMenu={e => { e.preventDefault(); this.props.handleFlag(this.props.index);}}
        onTouchEnd={this.handleTouchEnd}
        onTouchStart={this.handleTouchStart}
      >
        {valueToDisplay === 'b' ? <i className="fa fa-bomb"/> : valueToDisplay}
      </button>
    );
  }
}

export default Square;

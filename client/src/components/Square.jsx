// React
import React from 'react';

// CSS
import styles from '../css-modules/Square.module.css'

class Square extends React.Component {
  constructor(props) {
    super(props);
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
      >
        {valueToDisplay === 'b' ? <i className="fa fa-bomb"/> : valueToDisplay}
      </button>
    );
  }
}

export default Square;

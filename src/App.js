import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passedIndices: [],
      screenWidth: window.innerWidth,
      renderedSquares: [],
      squares: [
        {
          "index": 0,
          "color": "#000000"
        },
        {
          "index": 1,
          "color": "#2B8EAD"
        },
        {
          "index": 2,
          "color": "#333333"
        },
        {
          "index": 3,
          "color": "#6F98A8"
        },
        {
          "index": 4,
          "color": "#FFFFFF"
        },
        {
          "index": 5,
          "color": "#BFBFBF"
        },
        {
          "index": 6,
          "color": "#EFEFEF"
        },
        {
          "index": 7,
          "color": "#2F454E"
        },
        {
          "index": 8,
          "color": "#72C3DC"
        }
      ]
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    
  }
  componentDidMount() {
    this.setState({ renderedSquares: this.state.squares });
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
     this.setState({ screenWidth: window.innerWidth });
  }

  shuffle = () => {
    var passedIndices = [];
    var renderedSquares = [];

    while (passedIndices.length <= 9) {
      var x = this.generateRandom();
      if ((x < 9) && passedIndices.indexOf(x) < 0) {
        var obj = this.state.squares[x];
        renderedSquares.push(obj);
        passedIndices.push(x);
      }
      if (passedIndices.length === 9)
        break;
    }
    this.setState({ renderedSquares: renderedSquares });
  }

  sort = () => {
    this.setState({ renderedSquares: this.state.squares });
  }
  generateRandom = () => {
    var x = parseInt(10 * Math.random());
    return x;
  }
  render() {
    return (
      <Fragment>
      <div className="title">
        Shuffle and Sort By Shashank Shah
      </div>
      <div className="responsive-shuffle">
        <div className="actBtns">
          <input type="button" onClick={() => this.shuffle()} value="Shuffle" className="actionButton" />
          <br />
          <input type="button" onClick={() => this.sort()} value="Sort" className="actionButton" />
        </div>
        <div className="squares">
          <div className="row">
            {this.state.renderedSquares.map((each, idx) => {
              if (idx < 3) {
                return <Square screenWidth={this.state.screenWidth} color={each.color} value={each.index} />
              } else {
                return null;
              }
            })}
          </div>

          <div className="row">
            {this.state.renderedSquares.map((each, idx) => {
              if (idx >= 3 && idx < 6) {
                return <Square screenWidth={this.state.screenWidth} color={each.color} value={each.index} />
              } else {
                return null;
              }
            })}
          </div>

          <div className="row">
            {this.state.renderedSquares.map((each, idx) => {
              if (idx >= 6) {
                return <Square screenWidth={this.state.screenWidth} color={each.color} value={each.index} />
              } else {
                return null;
              }
            })}
          </div>
          <div className="title-desktop">
            Shuffle and Sort By Shashank Shah
          </div>
        </div>
      </div>
      </Fragment>
    );
  }
}

function Square(props) {
  return (
    <div className="square" style={(props.screenWidth > 960) ? {position:"relative",background: props.color}:{position:"relative",background: "#f9f9f9"}}>
      <div className="strip" style={{position:"absolute",background: props.color, width:"10px",height:"100px",left:"0px", top:"0px"}}></div>
      <div>
        {props.value}
      </div>
    </div>
  );
}

export default App;

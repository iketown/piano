import React, { Component } from "react";
import Key from "./Key";
import Dot from "./Dot";
import notesList from "../js/notesList";

import "../css/keyboard.css";

export default class Keyboard extends Component {
  render() {
    return (
      <div className="keyboard-frame">
        <div className="keyboard">
          {this.props.questionDots.map(key => {
            return (
              <Dot
                key={key}
                keyName={key}
                className={"orange"}
                shape={"circle"}
                userPlayKey={this.props.userPlayKey}
              />
            );
          })}
          {this.props.answerDots.map(key => {
            return (
              <Dot
                key={key}
                keyName={key}
                className={"blue"}
                shape={"filledCircle"}
                userPlayKey={this.props.userPlayKey}
              />
            );
          })}
          <svg width="700px" height="300px" viewBox="0 0 700 300" version="1.1">
            <g id="octave-1">
              {notesList
                .filter(note => note.octave === 1)
                .map(key => (
                  <Key
                    key={key.noteName + key.octave}
                    noteName={key.noteName}
                    keypath={key.note}
                    classes={key.color}
                    octave={key.octave}
                    userPlayKey={this.props.userPlayKey}
                  />
                ))}
            </g>
            <g id="octave-2" transform="translate(350.5,0)">
              {notesList
                .filter(note => note.octave === 2)
                .map(key => (
                  <Key
                    key={key.noteName + key.octave}
                    noteName={key.noteName}
                    keypath={key.note}
                    classes={key.color}
                    octave={key.octave}
                    userPlayKey={this.props.userPlayKey}
                  />
                ))}
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

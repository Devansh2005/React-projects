"use strict";

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return [
        React.createElement("h1", { className: "heading" }, "Sing Along!"),
        React.createElement("div", { className: "bodydiv" }),
        React.createElement(
          "p",
          { className: "bodypara" },
          "Now this is a story all about how My life got flipped turned upside down and I'd like to take a minute, just sit right there I'll tell you how I became the prince of a town called Bel-Air"
        ),
        React.createElement(`br`, {}),
        React.createElement(
          "p",
          { className: "secondpara" },
          "I remember when we were younger you were my, my...."
        ),
        React.createElement("br", {}),
        React.createElement(
          "p",
          { className: "thirdpara" },
          "Ok ladies now lets get in formation"
        ),
      ];
    }

    return React.createElement(
      "button",
      {
        onClick: () => this.setState({ clicked: true }),
      },
      "Click To Reveal"
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(ClickButton), domContainer);

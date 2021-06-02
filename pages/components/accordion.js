import React from "react";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Accordion extends React.Component {
  render() {
    return (
      <div className="accordion">
        {this.props.hiddenTexts ? (
          this.props.hiddenTexts.map((hiddenText) => (
            <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />
          ))
        ) : (
          <></>
        )}
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    const activeStatus = this.state.visibility ? "active" : "";

    return (
      <div>
        <button
          onClick={this.handleToggleVisibility}
          className="accordion__button font-gibson-light text-left"
        >
          {this.props.hiddenText.label}
          {this.state.visibility ? (
            <FontAwesomeIcon
              icon={faChevronUp}
              className="mt-2 text-green-chia-lime"
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              className="mt-2 text-green-chia-dark1"
            />
          )}
        </button>
        <div
          className={`text-green-chia-dark1 ${
            activeStatus ? "" : ""
          } accordion__content ${activeStatus}`}
          dangerouslySetInnerHTML={
            activeStatus
              ? { __html: this.props.hiddenText.value }
              : { __html: "" }
          }
        ></div>
      </div>
    );
  }
}

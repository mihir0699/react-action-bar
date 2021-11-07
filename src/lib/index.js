import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

const ActionBar = (props) => {
  return (
    <>
      <header
        className="barStyles"
        style={{
          opacity: props.isVisible ? "1" : "0",
          zIndex: props.isVisible ? "-100" : "10",
          backgroundColor: props.backgroundColor ? props.backgroundColor : "",
        }}
      >
        <h3 className="message">
          {props.message ? props.message : "Unsaved changes"}
        </h3>
        <p className="buttonsDiv">
          <button
            className="button"
            onClick={() => (props.discardAction ? props.discardAction() : null)}
          >
            {props.discardTitle ? props.discardTitle : "Discard"}
          </button>
          <button
            className="button"
            style={{
              backgroundColor: props.primaryColor
                ? props.primaryColor
                : "#008060",
              border: "none",
            }}
            onClick={() => (props.primaryAction ? props.primaryAction() : null)}
          >
            {props.primaryTitle ? props.primaryTitle : "Save"}
          </button>
        </p>
      </header>
    </>
  );
};

export default ActionBar;

ActionBar.propTypes = {
  primaryAction: PropTypes.func,
  discardAction: PropTypes.func,
  primaryTitle: PropTypes.string,
  discardTitle: PropTypes.string,
  message: PropTypes.string,
  isVisible: PropTypes.bool,
  backgroundColor: PropTypes.string,
  primaryColor: PropTypes.string,
};

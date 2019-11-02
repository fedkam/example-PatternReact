import React from "react";
import PropTypes from "prop-types";

// работает в новом окне в режиме разработчика
const PropsTypes = ({ text, number, obj }) => {
  console.log("_______  PropsTypes() _______ ");
  return (
    <>
      <h2>
        Example: {text}, {number}, {obj.a}
      </h2>
    </>
  );
};

PropsTypes.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number,
  obj: PropTypes.object
};

export default PropsTypes;

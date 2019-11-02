import React from "react";

//компонент высшего порядка(witchProps)

const newProps = { text1: "high" };

const witchProps = newProps => WrappedComponent => {
  return ownProps => <WrappedComponent {...ownProps} {...newProps} />;
};

const SomeComponent = ({ text1, text2, text3 }) => (
  <div>
    <h2>
      Example: {text1} {text2} {text3}
    </h2>
  </div>
);

const MergerProps = witchProps(newProps)(SomeComponent);

const HOC = () => <MergerProps text2="order" text3="component" />;

export default HOC;

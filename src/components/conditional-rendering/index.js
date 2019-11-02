import React from "react";

//условный рендер
const ConditionRendering = ({ conditional = false }) => {
  console.log("_______ ConditionRendering() _______");
  console.log("--conditional =", conditional);

  return (
    <div>
      {conditional && (
        <div>
          <h2>Example: conditional rendering.</h2>
        </div>
      )}
    </div>
  );
};

export default ConditionRendering;

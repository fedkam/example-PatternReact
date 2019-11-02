import React from "react";

let states = {
  some: { a: "b" },
  mass: [
    {
      id: 0,
      text: " update"
    },
    {
      id: 3,
      text: "from redux (unreal Store)"
    }
  ]
};

const updateToMass = (mass, newEl, indx = -1) => {
  if (indx === -1) {
    return [...mass, newEl];
  }

  if (newEl === null) {
    return [...mass.slice(0, indx), ...mass.slice(indx + 1)];
  }

  return [...mass.slice(0, indx), newEl, ...mass.slice(indx + 1)];
};

const reducer = (state = states, action) => {
  switch (action) {
    case "SOME":
      return {
        ...state
      };

    case "ADD_TO_MASS":
      return {
        ...state,
        mass: updateToMass(state.mass, { id: 1, text: " store " })
      };

    case "DELETE_FROM_MASS":
      return {
        ...state,
        mass: updateToMass(state.mass, null, 2)
      };

    default:
      return state;
  }
};

const PrincipleUpdateStoreFromRedux = () => {
  console.log("_______ PrincipleUpdateStoreFromRedux() _______");
  console.log("--initialState = ", states);
  let testState = reducer(undefined, "ADD_TO_MASS");
  console.log("--add = ", testState);
  console.log("--delete = ", reducer(testState, "DELETE_FROM_MASS"));
  return (
    <div>
      <h2>
        Example:
        {testState.mass[0].text}
        {testState.mass[1].text}
        {testState.mass[2].text}
      </h2>
    </div>
  );
};

export default PrincipleUpdateStoreFromRedux;

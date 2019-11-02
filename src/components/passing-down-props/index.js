import React from "react";

//Передача свойств вниз по дереву компонентов

const Lvl1 = ({ txt1, ...props }) => {
  console.log("--Lvl1() -> txt1 =", txt1);
  return (
    <div>
      <Lvl2 {...props} />
    </div>
  );
};

const Lvl2 = ({ txt2, txt3 }) => {
  console.log("--Lvl2() -> txt2 =", txt2, " txt3=", txt3);
  return (
    <div>
      <h2>
        Example: {txt2} down {txt3}
      </h2>
    </div>
  );
};

const PassingDownProps = () => {
  console.log("_______  PassingDownProps() _______ ");
  return <Lvl1 txt1="Hi" txt2="passing " txt3="props" />;
};

export default PassingDownProps;

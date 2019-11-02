import React from "react";

// рендер-проп — функция,
// которая сообщает компоненту что необходимо рендерить.

const Lvl1 = ({ render }) => {
  const datas = " render props";

  return <div>{render(datas)}</div>;
};

const Lvl2 = ({ data }) => {
  return <h2>Example:{data}</h2>;
};

const RenderProps = () => {
  return (
    <div>
      <Lvl1 render={data => <Lvl2 data={data} />} />
    </div>
  );
};

export default RenderProps;

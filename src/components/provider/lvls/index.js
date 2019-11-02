import React from "react";
import { ExampleServiceProvider, ExampleServiceConsumer } from "../context";

//Работа с Контекстом

const Lvl1 = () => {
  // console.log("--Lvl1() text =", text); //нету
  return <Lvl2 />;
};

const Lvl2 = () => {
  return <Lvl3 />;
};

const Lvl3 = () => {
  return (
    <ExampleServiceConsumer>
      {text => {
        return <h2>Example: provider {text}</h2>;
      }}
    </ExampleServiceConsumer>
  );
};

const Provider = () => {
  const text = "context";
  //console.log("_______ Provider() _______");
  return (
    <ExampleServiceProvider value={text}>
      <Lvl1 />
    </ExampleServiceProvider>
  );
};

export default Provider;

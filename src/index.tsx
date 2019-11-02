import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

import ConditionRendering from "./components/conditional-rendering";
import PassingDownProps from "./components/passing-down-props";
import ProviderLvl from "./components/provider/lvls";
import HOC from "./components/hoc";
import RenderProps from "./components/render-props";
import PrincipleUpdateStoreFromRedux from "./components/principleUpdateStoreFromRedux";
import PromiseFetchAxios from "./components/promise-fetch-axios";
import PropsTypes from "./components/prop-types";

function App() {
  return (
    <>
      <ConditionRendering conditional={true} />
      <PassingDownProps />
      <ProviderLvl />
      <HOC />
      <RenderProps />
      <PrincipleUpdateStoreFromRedux />
      <PromiseFetchAxios />
      <PropsTypes number="notNumber" text="propsTypes" obj={{ a: "object" }} />
    </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

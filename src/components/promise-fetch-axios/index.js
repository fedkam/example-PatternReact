import React, { useState } from "react";
const axios = require("axios").default;

const PromiseFetchAxios = () => {
  const [statePromise, setStatePromise] = useState("");
  const [stateFetch, setStateFetch] = useState("");
  const [stateAxios, setStateAxios] = useState("");

  const pomiseFunc = () => {
    let promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("Promise");
      }, 1000);
    });
    promise.then(function(value) {
      //console.log("--Promise = ", value);
      setStatePromise(value);
      // expected output: "foo"
    });
  };

  const fetchFunc = async (version = 1) => {
    let url =
      "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";

    if (version === 1) {
      // стандарт
      let response = await fetch(url);
      if (response.ok) {
        let commits = await response.json();
        commits = ", Fetch(" + commits[0].author.login + ")"; //преобразование для понятного вывода
        //console.log("--fetch = ", commits);
        setStateFetch(commits);
      } else console.log("--fetchStop-MaxLimitsRequest");
    } else if (version === 2) {
      // с промисами
      fetch(url)
        .then(response => response.json())
        .then(commits => {
          commits = "Fetch(" + commits[0].author.login + ")";
          //console.log("--fetch = ", commits);
          setStateFetch(commits);
        });
    } else if (version === 3) {
      //поллучить в текстовом виде
      let response = await fetch(url);
      if (response.ok) {
        let commits = await response.text();
        console.log("--fetch = ", commits);
      }
    } else if (version === 4) {
      let user = {
        name: "John",
        surname: "Smith"
      };

      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(user)
      }); // Отправка

      let result = await response.json(); //Ответ
      //console.log("--fetch = ", result.message);
    }
  };

  const axiosFunc = async (version = 1) => {
    let url = "https://jsonplaceholder.typicode.com/users";

    if (version === 1) {
      // стандарт
      let res = await axios(url);
      let response = res.data;
      let commits = ", Axios(" + response[0].username + ")";
      //console.log("--Axios = ", commits);
      setStateAxios(commits);
    } else if (version === 2) {
      // с промисами
      axios.get(url).then(res => {
        let response = res.data;
        let commits = ", Axios(" + response[0].username + ")";
        //console.log("--Axios = ", commits);
        setStateAxios(commits);
      });
    }
  };

  pomiseFunc();
  fetchFunc(1);
  axiosFunc(1);

  console.log("_______ PromiseFetchAxios() _______");
  return (
    <h2>
      Example: {statePromise} {stateFetch} {stateAxios}
    </h2>
  );
};

export default PromiseFetchAxios;

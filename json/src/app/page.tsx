"use client"; // must include this whenever we use states
import { useState, useEffect } from "react";
import axios from "axios";

interface Joke {
  id: string;
  type: string;
  setup: string;
  punchline: string;
}

const callJokeApi = async () => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://official-joke-api.appspot.com/random_joke",
    headers: {},
  };

  try {
    // wait until the request is finished before continuing
    const response = await axios.request(config);
    // return the joke
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }

  // axios
  //   .request(config)
  //   .then((response: Joke | any) => {
  //     console.log(JSON.stringify(response.data));
  //     return response.data;
  //   })
  //   .catch((error: AxiosError) => {
  //     console.log(error);
  // });
};

export default function Home() {
  const [myJoke, setMyJoke] = useState<Joke | null>(null);
  // call the joke API once on each render
  useEffect(() => {
    // set the joke as whatever returned by the API
    const getJoke = async () => {
      const joke = await callJokeApi();
      setMyJoke(joke);
    };
    getJoke();
  }, []);
  // setMyJoke(callJokeApi());

  // const [dadJoke, setDadJoke] = useState({
  //   id: "1",
  //   type: "string",
  //   setup: "Something funny",
  //   punchline: "Something else",
  // } as Joke);

  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("Count changed.");
  // }, [count]);

  // const handleButtonClick = () => {
  //   // lambda function
  //   setCount(count + 1);
  // };

  // const firstJson = {
  //   name: "Beam",
  //   skills: {
  //     c: 7,
  //     java: 9,
  //   },
  // };

  // show loading screen when API hasn't finished loading, otherwise show the joke
  return (
    <div>
      {/*
      <p>Name: {firstJson.name}</p>
      <p>C: {firstJson.skills["c"]}</p>
      <p>Java: {firstJson.skills["java"]}</p>
      <button type="button" onClick={handleButtonClick}>
        {" "}
        Count: {count}
      </button>
       */}
      Joke:
      {myJoke ? (
        <div>
          <p>{myJoke.id}</p>
          <p>{myJoke.setup}</p>
          <p>{myJoke.punchline}</p>
        </div>
      ) : (
        <p>Loading…</p>
      )}
    </div>
  );
}

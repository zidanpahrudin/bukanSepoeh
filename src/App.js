import React, { useState } from "react";
import ShowCase from "./ShowCase";
import Header from "./parts/Header";
import Navigation from "./parts/Navigation";
import data from "./data/ListItmes";
function App() {
  const [catalog, setCataglog] = useState(data);
  return (
    <>
      <Header />
      <main>
        <ShowCase />
        <Navigation catalog={data} />
      </main>
    </>
  );
}

export default App;

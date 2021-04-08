import React from "react";
import Homebanner from "./Components/Home__banner/Home__banner";
import Homeintro from "./Components/Home__intro/Home__intro";
import Hometeam from "./Components/Home__team/Home__team";
import Homefooter from "./Components/Home__footer/Home__footer";
import Homeblocks from "./Components/Home__blocks/Home__blocks";
function App() {
  return (
    <div className="App">
      <Homebanner />
      <Homeintro />
      <Homeblocks />
      <Hometeam />
      <Homefooter />
    </div>
  );
}

export default App;

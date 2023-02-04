import { createContext, useState } from "react";
import Home from "./COMPNENT/Home";

const Alldata = createContext();
const App = () => {
  const [html, edithtml] = useState("");
  const [css, setcss] = useState("");
  const [js, setjs] = useState("");

  return (
    <Alldata.Provider
      value={
        {
          html,
          setcss,
          setjs,
          edithtml,
          css,
          js
        }

      }
    >
      <Home />
    </Alldata.Provider>
  );
}

export default App;
export { Alldata }
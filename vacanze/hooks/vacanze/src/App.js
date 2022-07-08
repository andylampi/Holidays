import { useState } from "react";
import Article from "./components/Article";
import Holidays from "./containers/Dates";


function App() {
  const [index, setIndex ] = useState(0)
  const nextPage = () => {
    if(index === 4){
      setIndex(0)
    }
    else{
      setIndex(index +1)
    }
  }
  const backPage = () => {
    if(index === 0){
      setIndex(4)
    }
    else{
      setIndex(index -1)
    }
  }
  return (
    <div className="app">
      <h3 className="title">Le Nostre Vacanze</h3>
        <Article {...Holidays[index]} nextPage={nextPage} backPage={backPage} />;
    </div>
  );
}

export default App;

import Content from "./component/Content";
import Navbar from "./component/Navbar";
import "./style.css"

function App() {
  return (
    <div className="App">
      
         <Navbar/>
         <div className="flex flex-1 h-auto w-full ">
         <Content/>
         </div>
         
    </div>
  );
}

export default App;

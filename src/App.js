
import Body from "./COMPONENT/FIRSTBODY/BODY/Body";
import Footer from "./COMPONENT/FOOTER/Footer";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
    
        <Route exact path="/" element={  <div className="flex flex-col  justify-between">
          <Body/>
          </div>}/>

     </Routes>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;

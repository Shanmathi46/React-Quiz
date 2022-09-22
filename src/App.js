
import './app.scss';
import { useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Result from './components/Result';
import Question from './components/Question';


function App() {
  const [score,setScore]=useState(0)
  
  return (
    <div className="app">
      <Router>
       <Routes>
       <Route exact path ="/" element={<Question score={score} setScore={setScore}/>}> </Route>
        <Route exact path ="/result" element={<Result score={score}/>}> </Route>
          
      
      </Routes>
      </Router>
    </div>  
  );
}

export default App;

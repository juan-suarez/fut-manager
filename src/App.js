import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom'
import Firstview from './views/firstview';
import Addplayer from './views/Addplayer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Firstview/>}/>
        <Route path='/addplayer' element={<Addplayer/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom'
import Firstview from './views/firstview';
import Addplayer from './views/Addplayer';
import Teamview from './views/teamview'
import Allplayers from './views/Allplayers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Firstview/>}/>
        <Route path='/addplayer' element={<Addplayer/>}/>
        <Route path='/teamview' element={<Teamview/>}/>
        <Route path='/allplayers' element={<Allplayers/>}/>
      </Routes>
    </Router>
  );
}

export default App;

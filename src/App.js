import './App.css';
import {NavBar} from './myComponents/navBar';
import {ItemList} from './myComponents/itemList';
import {Link , Route , Routes , BrowserRouter as Router} from 'react-router-dom';
import {About} from './myComponents/about';
import {Home} from './myComponents/home';
function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/' element={<ItemList/>}></Route>
      </Routes>
      
      </Router>
    </>
  );
}
export default App;


import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import PlayPage from './pages/PlayPage';
import axios from "axios";

axios.defaults.baseURL= "https://api.themoviedb.org/3";
axios.defaults.params ={};
axios.defaults.params["api_key"]= "ab76a280efd3f4e83a0cdd9a562d0262";

function App() {
  return (
    <Routes>
      <Route path='/' element= {<HomePage/>}></Route>
      <Route path='/movie/:id' element= {<MoviePage/>}></Route>
      <Route path='/play' element= {<PlayPage/>}></Route>
    </Routes>
  );
}

export default App;

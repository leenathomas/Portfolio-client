import React, { useState } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useDispatch } from 'react-redux';
//import { getPosts } from './actions/posts';

import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import PhotographyPage from './pages/PhotographyPage.js';
import BlogPage from './pages/BlogPage.js';
import MyProjectPage from './pages/MyProjectPage.js'
import Navigation from './components/Navigation/Navigation.js';

const App = () => {
  //const dispatch = useDispatch();

  /*
   the useEffect hook runs on every render and re-render
  second parameter, an array, containing the list of things that will cause the useEffect hook to run. When changed,
   it will trigger the effect hook. The key to running an effect once is to pass in an empty array

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  const [title, setTitle] = useState('Zeitgeist');
  const [headerLinks, setHeaderLinks] = useState([
    {  title:'Home',path:'/'},
    {  title:'Photography',path:'/'},
    {  title:'Blogs',path:'/'},
    {  title:'My Projects',path:'/'}
   ]);
  const [home, setHome] = useState({
    title:'Home page Title',
    subTitle:'Home page sub Title',
    description:'description'
  });
  const [photography, setPhotography] = useState({
    title:'Photography page Title',
    subTitle:'Photography page sub Title',
    description:'Photography description'
  });
  const [blogs, setBlogs] = useState({
    title:'Blogs page Title',
    subTitle:'Blogs page sub Title',
    description:'Blogs description'
  });
  */
  const [myProjects, setMyProjects] = useState({
    title:'MyProject page Title',
    subTitle:'MyProject page sub Title',
    description:'MyProject description'
  });

  return ( 
    <Router class="hi">
      <Navigation/>
      <Route path="/" exact render={()=><HomePage ></HomePage>}></Route>
      <Route path="/photography" exact render={()=><PhotographyPage></PhotographyPage>}></Route>
      <Route path="/blogs" exact render={()=><BlogPage ></BlogPage>}></Route>
      <Route path="/myProjects" exact render={()=><MyProjectPage title={myProjects.title}></MyProjectPage>}></Route>  
      <Footer/>
    </Router>    
  );
}

export default App;

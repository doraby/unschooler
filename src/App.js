import React from 'react';
import './scss/style.scss';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import Sidebar from './components/main/sidebar';
import Profession from './components/profession/profession';
import { BrowserRouter, Route } from 'react-router-dom';
import Courses from './components/courses/courses';
import Projects from './components/projects/projects';
import Test from './components/test/test';


const App = () => {
  return (
    <BrowserRouter>
    <React.Fragment>
      <Header />
      <Sidebar />
      <Route exact path="/" component={Main}/>
      <Route path="/profession" component={Profession}/>
      <Route path="/courses" component={Courses}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/test" component={Test}/>
      <Footer />
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
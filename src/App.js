import React from 'react';
import './scss/style.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';


const App = () => {
  return (
    <React.Fragment>
    <Header />
    <Main />
    <Footer />
    </React.Fragment>
  );
}

export default App;
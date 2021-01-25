//import React from 'react';

const setProfessionSelect = (p=localStorage.getItem('prof'), a=p) => {
  localStorage.setItem('prof', p);
  //alert (localStorage.getItem('prof'));
  a = localStorage.getItem('prof');
}

export {setProfessionSelect};
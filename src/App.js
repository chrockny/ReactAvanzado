import React from 'react';
import './App.css';
import {ListOfCategories} from './components/ListOfCategories/index';
import {GlobalStyle} from './styles/GlobalStyles';
import {ListOfPhotoCards} from './components/ListOfPhotoCards/index';
import Logo from './components/Logo/index';

function App() {
  return (
    <React.Fragment>
    <GlobalStyle/>
    <Logo/>
    <ListOfCategories/>
    <ListOfPhotoCards/>
    </React.Fragment>
  );
}

export default App;

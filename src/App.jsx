import './App.css';

import { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SkipLink from './SkipLink';

function App() {

  const[page, setPage] = useState('Home');

  function onNav(event){
    const target = event.target.dataset.target;
    
    if(target){
        event.preventDefault();
        setPage(target);
        console.log('click', target);
    }
    
}


  return (


    <div className="app">
    
      <SkipLink/>

      <Header onNav={onNav}/> 
      <Main onNav={onNav} page={page} setPage={setPage}/>
      <Footer onNav={onNav}/>
    </div>
  );
}

export default App;

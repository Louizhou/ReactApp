import React from 'react';
import Hello from './components/hello';
import MyGallery from './components/Gallery'
import MyPicture from './components/test'
import Drinks from './components/Age Test'

function App() {
  return (
    <div className="App">
      {/* <Hello lang='en' name='Jimmy' Greeting prefer='steam'/>
      <Hello lang='zh' name='Louis' prefer='steam'/>
      <Hello lang='zh' name='Dude' prefer='uplay'/> */}
      <MyGallery/>
      <MyPicture/>
      <Drinks age={33}/>
      <Drinks age={15}/>
      <Drinks age = {18}/>
    </div>
  );
}

export default App;



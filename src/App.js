import React from 'react';
import Tweet from './tweet';

function App(){
  return(
    <div className="app">
      <Tweet name="Scheduled Course" message="Click here to view your scheduled courses" />
      <Tweet name="Completed Course" message="Tap here to view your completed courses" />
      <Tweet name="Cancelled Course" message="Tap here to view your cancelled courses" />
      <Tweet name="Learn More" message="Tap here to learn more!" />
    </div>
  )
  ;
}


export default App;
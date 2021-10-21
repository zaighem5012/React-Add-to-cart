import React from 'react'
import './App.css';
import Header from './component/header/header';
import Main from './component/main/main';
function App() {
  const [count, setCount] = React.useState(0);
  const countF = () => {
    setCount(count + 1);
  }
  return (
    <div className="appWrapper">
      <Header count={count} />
      <Main addToCount={countF} count={count} />
    </div>
  );
}

export default App;

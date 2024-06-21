import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import HooksCounter from './components/HooksCounter';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingOne from './components/StatefulGreetingOne';
import StatefulGreetingWithCallBack from './components/StatefulGreetingWithCallBack';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting name="Bilal"/> */}
      {/* <StatefulGreeting name="Bilal"/> */}
      {/* <HooksCounter name="Bilal"/> */}
      {/* <StatefulGreetingOne greeting = "How are you?"/> */}
      {/* <StatefulGreetingWithCallBack greeting = "How are you?"/> */}
      <StatefulGreetingWithPrevState greeting = "How are you?"/>
    </div>
  );
}

export default App;

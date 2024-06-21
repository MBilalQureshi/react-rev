import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import HooksCounter from './components/HooksCounter';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingOne from './components/StatefulGreetingOne';
import StatefulGreetingWithCallBack from './components/StatefulGreetingWithCallBack';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting name="Bilal"/> */}
      <StatefulGreetingWithCallBack greeting = "How are you?"/>
      {/* <StatefulGreetingOne greeting = "How are you?"/> */}
      {/* <StatefulGreeting name="Bilal"/> */}
      {/* <HooksCounter name="Bilal"/> */}
    </div>
  );
}

export default App;

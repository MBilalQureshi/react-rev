import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import HooksCounter from './components/HooksCounter';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting name="Bilal"/>
      {/* <StatefulGreeting name="Bilal"/> */}
      {/* <HooksCounter name="Bilal"/> */}
    </div>
  );
}

export default App;

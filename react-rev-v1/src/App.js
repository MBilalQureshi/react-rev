import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting name="Bilal"/> */}
      <StatefulGreeting name="Bilal"/>
    </div>
  );
}

export default App;

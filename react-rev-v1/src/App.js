import './App.css';
import EventBinding from './components/BindingEvents';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import EventClass from './components/EventClass';
import EventFunctional from './components/EventFunctional';
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
      {/* <StatefulGreetingWithPrevState greeting = "How are you?"/> */}
      
      {/* <EventFunctional /> */}
      {/* <EventClass /> */}

      {/* 4 WAYS TO BIND EVENTS, IMPORTANT */}
      {/* <EventBinding /> */}

      <ConditionalRenderingFunctional connected={true}/>
      <ConditionalRenderingClass />

    </div>
  );
}

export default App;

import './App.css';
import EventBinding from './components/BindingEvents';
import Clock from './components/Clock';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ControlledForm from './components/ControlledForm';
import EventClass from './components/EventClass';
import EventFunctional from './components/EventFunctional';
import FunctionalGreeting from './components/FunctionalGreeting';
import HooksCounter from './components/HooksCounter';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import MethodsAsPropsParent from './components/MethodsAsPropsParentClass';
import NestingComponents from './components/NestingComponents';
import RenderingLists from './components/RenderingLists';
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

      {/* <ConditionalRenderingFunctional connected={true} /> */}
      {/* <ConditionalRenderingClass /> */}

      {/* THIS HAS TWO CHILD COMPONENTS, UserData.js and UserMessage.js */}
      {/* <NestingComponents /> */}

      {/* Get function from parent and use it in functional child and trigger that event in parent */}
      {/* <MethodsAsPropsParent /> */}

      {/* Using MAP , keys and indexes(avoid it, x.map((y,index)=>{}))*/}
      {/* <RenderingLists /> */}

      {/* --------------------------------------------------3 MAIN COMPONENT LIFECYCLE METHODS ------------------------------------------------------- */}

      {/*IMPORTANT: FOR UNDERSTANDING CYCLE OF componentDidMount, componentDidUpdate, componentWillUnmount */}
      {/* <Clock /> */}

      {/* componentDidMount
      1. Parents's componentDid called after all the children are mounted

      2. Parent's render will cause all it's children to re render too, which could slow app down!

      3. There are ways to prevent child components from rendering, coming in later task
       */}
      {/* <LifeCyclesCDM /> */}

      
      {/* componentDidMount 
      1. ComponentDidMount is called on every update, 1.e
      - change of props
      - change of state
      - parent's rerender 
      
      2. A child update won't cause the parent to re-render BUT parent's update will re-render all the child , which could slow app down!
      
      3. pass prevProps and prevState to componentDidUpdate to make conditional updates
      */}
      {/* <LifeCyclesCDU /> */}

      {/* componentWillUnmount 
      Clean up function expamles
      - remove event listners
      - reset intervals
      - stop timers
      - cancel network request
      
      */}
      {/* <LifeCyclesCWU /> */}

      {/* --------------------------------------------------------------------------------------------------------- */}

      {/* Controlled components are the ones controlled by react state not DOM , FIELD CONTROLS AND SUBMISSION CONTROL TO REACT ONLY
      
      How to create
      1. create an input element with onChange attribute
      2. write handler for the input's on chnage event
      3. add a matching property in the state

      */}
      <ControlledForm />

    </div>
  );
}

export default App;

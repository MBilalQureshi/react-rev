import './App.css';
import EventBinding from './components/BindingEvents';
import Clock from './components/Clock';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ControlledForm from './components/ControlledForm';
import ControlledFormHook from './components/ControlledFormHook';
import EventClass from './components/EventClass';
import EventFunctional from './components/EventFunctional';
import FunctionalGreeting from './components/FunctionalGreeting';
import HTTPRequests from './components/HTTPRequests';
import HooksCounter from './components/HooksCounter';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import MethodsAsPropsParent from './components/MethodsAsPropsParentClass';
import NestingComponents from './components/NestingComponents';
import RenderingLists from './components/RenderingLists';
import SearchBar from './components/SearchBar';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingOne from './components/StatefulGreetingOne';
import StatefulGreetingWithCallBack from './components/StatefulGreetingWithCallBack';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import UncontrolledForm from './components/UncontrolledForm';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';

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
      {/* <ControlledForm /> */}

      {/* Uncontrolled Form, DOM will be managing changes now, we will use REFs here see Readme for more info */}
      {/* <UncontrolledForm /> */}


      {/* SEARCH-BAR CHALLENGE - important*/}
      {/* <SearchBar /> */}


      {/* --------------------------------------------- HOOKS ------------------------------------------------------------------- */}

      {/* ------------ UseState hook ------------------- */}
      
      {/* UseState hook with controlled form */}
      {/* <ControlledFormHook /> */}

      {/* Part 1: UseState, arrays with spread operator and filter to add remove items - IMPORTANT*/}
      {/* <UseStateWithArrays /> */}


      {/* Part 2: Two other possible ways to use useState hook(arrays)
          1. Updating objects in the state
          2. Updating state based on previous State */}
      
      {/* 1 - useState hook - Updating objects in the state - SPREAD OPERATOR - IMPORTANT*/}
      {/* <UseStateWithObjects /> */}

      {/* 2 - useState hook - Updating state based on previous State - Arrow fucntion to get prev value - IMPORTANT*/}
      {/* <HooksCounter name="Bilal" /> */}


      {/* ------------ UseEffect hook ------------------- */}
      {/* <UseEffectCounter /> */}
      {/* This will toggle display of UseEffectCounter component */}
      {/* <UseEffectCounterContainer /> */}
      




      {/* ----------------------- *** Some Hooks for future learning *** ----------------------- */}
      {/* ------------ UseContext hook ------------------- */}
      {/* <UseContextHook /> */}

      {/* ------------ UseReducer hook ------------------- */}
      {/* <UseReducerHook /> */}

      {/* ------------ UseRef hook ------------------- */}
      {/* <UseRefHook /> */}

      {/* ------------ UseMemo hook ------------------- */}
      {/* <UseMemoHook /> */}

      {/* ------------ UseCallback hook ------------------- */}
      {/* <UseCallbackHook /> */}

      {/* ------------ Custom hook ------------------- */}
      {/* <CustomHook /> */}


      {/* ------------------------------------------------ HTTP REQUESTS and Data Fetching - AXIOS ------------------------------ */}
      <HTTPRequests />
    </div>
  );
}

export default App;

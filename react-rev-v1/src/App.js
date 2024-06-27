import './App.css';
import EventBinding from './components/BindingEvents';
import Clock from './components/Clock';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import EventClass from './components/EventClass';
import EventFunctional from './components/EventFunctional';
import FunctionalGreeting from './components/FunctionalGreeting';
import HooksCounter from './components/HooksCounter';
import LifeCyclesCDM from './components/LifeCyclesCDM';
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

      {/*IMPORTANT: FOR UNDERSTANDING CYCLE OF componentDidMount, componentDidUpdate, componentWillUnmount */}
      {/* <Clock /> */}

      {/* componentDidMount
      1. Parents's componentDid called after all the children are mounted

      2. Parent's render will cause all it's children to re render too, which could slow app down!

      3. There are ways to prevent child components from rendering, coming in later task
       */}

      <LifeCyclesCDM />

      

    </div>
  );
}

export default App;

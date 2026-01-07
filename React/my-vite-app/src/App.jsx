import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DashboardClass from './components/DashboardClass'
import Practice from './components/Practice'
import JSXBasics from './components/JSXBasics'
import Object from './components/Object'
import Alert from './components/Alert'
import CompInComp from './components/CompInComp'
import ClassCompInComp from './components/ClassCompInComp'
import DashboardClassComponent from './components/DashboardClassComponent'
import Props from './components/Props'
import CarComponent from './components/CarComponent'
import InlineCSS from './CssComponents/InlineCSS'
import ExternalCss from './components/ExternalCss'
import Card from './components/Card'
import EventHandling from './components/EventHandling'
import Likes from './components/Likes'
import UseState from './components/Hooks/UseState'
import UseEffect from './components/Hooks/UseEffectExample'
import Password from './components/Hooks/Password'
import WithoutUseContext from './components/Hooks/UseContext/WithoutUseContext'
import UseContext from './components/Hooks/UseContext/UseContext'
import DarkModeProvider from './components/Hooks/UseContext/DarkModeProvider'
import UseCallback from './components/Hooks/UseCallbackFun'
import ParentComp from './components/Hooks/UseCallback/ParentComp'
import ParentTheme from './components/Hooks/UseCallback/ParentTheme'
import UseMemoExample from './components/Hooks/UseMemo/UseMemoExample'
import MoutingUnmounting from './components/CA1/MoutingUnmounting'
import ParentForToggle from './components/CA1/ParentForToggle'
import Destruturing from './components/CA1/Destruturing'
import Cart from './components/CA1/Cart'
import Question1 from './components/CA1/Question1'
import Question2 from './components/CA1/Question2'
import ThemeToggler from './components/CA1/ThemeToggler'
import Question3 from './components/CA1/Question3'
import Question4 from './components/CA1/Question4'
import Question5 from './components/CA1/Question5'
import Question6 from './components/CA1/Question6'
import DarkThemeProvider from './components/CA1/DarkThemeProvider'
import TodoList from './components/CA1/TodoList'
import TodoInput from './components/CA1/ToDo/TodoList'
import UserReducer from './components/Hooks/UseReducer/UserReducer'
import Discout from './components/Hooks/UseReducer/Discout'
import UseRefDom from './components/Hooks/UseRef/UseRefDom'
import Toggel from './components/Hooks/CustomHooks/Toggel'
import ControlledComponent from './FormHandling/ControlledComponent'
import FunctioinalComponent from './FormHandling/FunctioinalComponent'
import UncontrolledComponent from './FormHandling/UncontrolledComponent'
import FormValidation from './FormHandling/FormValidation'
import FetchMethod from './HttpMethods/Fetch/FetchMethod'
import FetchMethod2 from './HttpMethods/Fetch/FetchMethod2'
import AxiosMethod from './HttpMethods/Fetch/Axios/AxiosMethod'
import ParentRouting from './ReactRouterDom/ParentRouting'
import AxiosTask from './HttpMethods/Fetch/Axios/AxiosTask'
import Recipes from '../Recipes/Recipes'
import ParentRoutes from '../Recipes/ParentRoutes'
import { Provider } from 'react-redux'
import {store} from './store.jsx'
import ReduxUI from './ReduxToolkit/ReduxUI.jsx'
import Task from './components/task.jsx'

function App() {
  const [count, setCount] = useState(0)

   const config = {
    RAM: "8Gb",
    ROM: "1Tb"
  };
  const arr = [1,2,3,4];



  return (
    <>
      {/* <DashboardClass/>
      <Practice/>
      <JSXBasics/>
      <Object/>
      <Alert/>

      <CompInComp/>
      <ClassCompInComp/>
      <DashboardClassComponent/>
      <Props brand = "HP" price = {75000}/>
      <Props con ={config}/>
      <Props arr = {arr}/> */}
      {/* <CarComponent model="KIA" />
      <InlineCSS/>
      <ExternalCss/> */}
      {/* <Card/> */}
      {/* <EventHandling/> */}
      {/* <Likes/> */}
      <UseState/>
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <Password/> */}
      {/* <WithoutUseContext/> */}
      {/* <UseContext/> */}
      {/* <DarkModeProvider/> */}
      {/* <UseCallback/> */}
      {/* <ParentComp/> */}

      {/* <ParentTheme/> */}
      {/* <UseMemoExample/> */}
      {/* <MoutingUnmounting/> */}
      {/* <ParentForToggle/> */}
      {/* <Destruturing/> */}
      {/* <Cart/> */}
      {/* <Question1/> */}
      {/* <Question2/> */}
      {/* <ThemeToggler/> */}
      {/* <Question3/> */}
      {/* <Question4/> */}
      {/* <Question5/> */}
      {/* <Question6/> */}
      {/* <DarkThemeProvider/> */}
      {/* <TodoList/>  */}
      {/* <TodoList/> */}
      {/* <TodoList/> */}
      {/* <TodoList/> */}
      {/* <UserReducer/> */}
      {/* <Discout/> */}
      {/* <UseRefDom/> */}
      {/* <Toggel/> */}
      {/* <ControlledComponent/>   */}
      {/* <FunctioinalComponent/> */}
      {/* <UncontrolledComponent/> */}
      {/* <FormValidation/> */}
      {/* <FetchMethod/> */}
      {/* <FetchMethod2/> */}
      {/* <AxiosMethod/>*/}
      {/* <ParentRouting/> */}
      {/* <AxiosTask/> */}
      {/* <ParentRouting/> */}
      {/* <Recipes/> */}
      {/* <ParentRoutes/> */}
      {/* <task */}
      
      {/* <Provider store={store}>
        <ReduxUI/>
      </Provider> */}

      <Task/>

      </>
  )
}

export default App

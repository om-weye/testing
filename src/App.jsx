import NavigationBar from './Component/Header/NavigationBar'
import Carousel from './Component/Header/Carousel'
import {useSelector , useDispatch} from 'react-redux'

function App() {
  const counter = useSelector(state => state.counter)
  const name = useSelector(state => state.name);  //we can fetch data

  const dispatch = useDispatch()

  return (
    <div className="App">
      App
      <NavigationBar/>
      <Carousel/>

      count : {counter} {name}
      <button onClick={() => dispatch({type : 'ADD_ONE_TO_COUNTER'})}>Increment</button>
      <button onClick={() => dispatch({type : 'MINUS_ONE_FROM_COUNTER'})}>Decrement</button>
      <button onClick={() => dispatch({type : 'CUSTOMER_ADD_COUNTER', payload : 10})}>testing</button>

    </div>
  )
}

export default App

/*
  Store
  Action
  Reducer
*/

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LikedDogs from './components/LikedDogs';
import About from './components/About'
import BaseLayout from './components/layout/BaseLayout'
import  './styles.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/reducer'
import App from './App';
import DogList from './components/DogList'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


const saveToLocalStorage = (reduxGlobalState) => {
  // serialization - converting js object to a string
  const serializeState = localStorage.getItem('state');
try {
  const serializeState = JSON.stringify(reduxGlobalState);
  localStorage.setItem('state',serializeState)
}
catch(e){

}
}

const loadFromLocalStorage = (params) => {
  const serializeState = localStorage.getItem('state');

  if(serializeState === null){
    return undefined;
  } else {
    return JSON.parse(serializeState);
  }
}

const persistedState = loadFromLocalStorage();

//Initializing REDUX store
let store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{

  saveToLocalStorage(store.getState());
})

//Provider hooks react to redux
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/dogs" component={DogList} />
          <Route path="/liked" component={LikedDogs} />
          <Route path="/about" component={About} />
        </Switch>
      </BaseLayout>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
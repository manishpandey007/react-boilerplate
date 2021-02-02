import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import {latestVersion} from './services/user'
import actions from './redux/user/actions'

function App(props) {

  const [name,setName] = useState("Manish");

  useEffect(()=>{
    props.dispatch({
      type: actions.SET_STATE,
      payload:{
        loading:true
      }
    })
    latestVersion().then(res => {
      props.dispatch({
        type: actions.SET_STATE,
        payload:res.data
      })
      props.dispatch({
        type: actions.SET_STATE,
        payload:{
          loading:false
        }
      })
      return res;
    }
    );
  },[]);

  if(props.user.loading){
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Loading
        </p>
      </header>
    </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
})


export default connect(mapStateToProps)(App);

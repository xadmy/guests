import React from 'react';
import {Provider} from 'react-redux';
import {Component} from 'react';
import logo from './logoGue.svg';
import {rootReducer} from '../store/reducers';
import MainComponent from './MainComponent';
import {createStore} from 'redux';


export const ACTION_CHANGE_GUEST = 'ACTION_CHANGE_GUEST';
export const ACTION_CHANGE_COUPLE = 'ACTION_CHANGE_COUPLE';

const store = createStore(rootReducer);


class WebPage extends Component{


  handleKeyPress(en){
    if(en.key === 'Enter' && en.target.value!=null){
        <fers />
      }
    }


  render() {
    return(
    <Provider store={store}>

      <div className="Page">

        <div className="Page-header">
            <img src={logo} className="Page-logo" alt="logo"/>
        </div>

        <div className="Page-Column">
             <h1>Add Guest</h1>
             <input className="addGuest" onKeyPress={this.handleKeyPress}/>
             <br/>

              <h1>List Guests</h1>

              <input type="button" onClick={(event) =>{
                <input type="button">;
              }}
              />

        </div>

        <div className="Page-footer">
            <h6>BMM 2018</h6>
        </div>

      </div>

    </Provider>);
    }
}



export default WebPage;

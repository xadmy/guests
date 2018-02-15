import React from 'react';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeGuest, changeCouple} from '../store/actions';


class MainComponent extends Component{
  render(){
    const {Guest, Couple, changeGuest, changeCouple} =this.props;


    return (
      <div>
        <div className="Page-Column">
             <h1>Add Guest</h1>
             <input className="addGuest" onKeyPress={this.handleKeyPress}/>
             <br/>

              <h1>List Guests</h1>

        </div>
        <div>
            <input
                type="text"
                value={Guest}
                placeholder="First Name"
                onChange={(event) =>{
                  changeGuest(event.target.value);
                }}
            />
        </div>

        <div>
            <input
                type="checkbox"
                value={changeCouple}
                onChange={(event) =>{
                  changeCouple(event.target.value);
                }}
            />
        </div>

        <div>
            <p>{Guest} {Couple}</p>
        </div>
      </div>
    )
  }
}

  const putStateToProps = (state) => {
      return {
          Guest: state.Guest,
          Couple: state.Couple
      };
  };

  const putActionsToProps = (dispatch) =>{
      return{
          changeGuest: bindActionCreators(changeGuest, dispatch),
          changeCouple: bindActionCreators(changeCouple, dispatch)
      };
  };

  export default connect(putStateToProps, putActionsToProps)(MainComponent);

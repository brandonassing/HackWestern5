import React, { Component } from 'react';
import './AddForm.scss';
import '../App.scss';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.shouldBeDisabled = this.shouldBeDisabled.bind(this);
    this.state = {
      name: "",
      number: ""
    };
  }


  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeNumber(event) {
    this.setState({
      number: event.target.value
    });
  }

  shouldBeDisabled() {
    let rawNum = this.state.number.replace(/[- )()]/g,'');
    if(this.state.name.length > 0 && (/^[A-Za-z\ ]+$/).test(this.state.name) && !isNaN(rawNum) && (rawNum.length === 10 || (rawNum.length ===11 && rawNum.slice(0,1) === "1"))) {
      return false;
    }
    return true;
  }

  handleSubmit(event) {
    if(!this.shouldBeDisabled()) {
      let number = this.state.number.replace(/[- )()]/g,'');
      if (number.length === 10) {
        number = "1" + number;
      }
      this.props.addCallback(this.state.name, number);
      this.setState({
        name: "",
        number: ""
      });
      event.preventDefault();
    }
  }

  render() {
    let disabled = this.shouldBeDisabled();
    return (

      <div id="add-card" className="uk-card uk-card-default uk-card-body uk-border-rounded .uk-box-shadow-large">
        <div id="form-body" className="uk-container">
        <form className="uk-form-horizontal uk-margin-large" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input className="uk-input uk-form-large" id="input-name" type="text" placeholder="John Crapper" value={this.state.name} onChange={this.handleChangeName} />
            <label className="uk-form-label" htmlFor="input-name">Name</label>
          </div>
          <div className="input-group uk-margin">
              <input className="uk-input uk-form-large" id="input-number" type="text" placeholder="1 (647) 244-7667" value={this.state.number} onChange={this.handleChangeNumber} />
              <label className="uk-form-label" htmlFor="input-number">Phone number</label>
          </div>
          <div id="add-button-div">
              <button id="add-button" type="submit" value="Submit" className="uk-button uk-button-large uk-button-primary" disabled={disabled}>Doody calls</button>
          </div>
        </form>
        </div>
      </div>

    );
  }
}

export default AddForm;

import React, { Component } from 'react'
import firebase from './firebase'
import Logo from './Logo'
import Date from './DatePicker.js';
import Time from './TimePicker.js';
import Message from './Message.js';
import Number from './Number.js';
import TextField from '@material-ui/core/TextField';

/*
firebase.firestore().collection('times').add({
    title: "Test",
    time: "12:00"
})
*/

class Form extends Component {

	constructor(props) {
		super(props)

		this.state = {
			Date: "2020-05-24T10:30",
			Time: "7:30",
			Num: "Phone Number",
			Mess: "Message",

		}
	}

	handleDateChange(e) {
		this.setState({
		  Date: e.target.value
		});
	  }
	handleNumChange(e) {
	this.setState({
		Num: e.target.value
	});
	}
	handleMessChange(e) {
	this.setState({
		Mess: e.target.value
	});
	}


	handleSubmit = event => {
		
        firebase.database().ref(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).set({
            Date: ""+this.state.Date,
			Num: ""+this.state.Num,
			Mess: ""+this.state.Mess

        })
		alert("Reminder Set!")
		event.preventDefault()
		
	}


	render() {
		//const { Date, Time, topic, number } = this.state
		return (
			<div>
					<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
						<Logo />
					</div>
					<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className="App">
						<form noValidate>
							<TextField
								onChange={e => this.handleDateChange(e)}
								id="datetime-local"
								label="Date"
								type="datetime-local"
								defaultValue="2020-05-24T10:30"
								InputLabelProps={{
								shrink: true,
								}}
							/>
						</form>
					</div>
					<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height:100}} className="App">
						<form noValidate autoComplete="off">
     						 <TextField id="Phone Number" label="Phone Number" variant="filled" onChange={e => this.handleNumChange(e)}/>
    					</form>
					</div>
					<div className="App">
						<form noValidate autoComplete="off">
           					<TextField id="Message" label="Message" variant="filled" onChange={e => this.handleMessChange(e)}/>
       					</form>
					</div >
					<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height:100}} className="App" >
						<button onClick={this.handleSubmit}> Schedule </button>
					</div>
			</div>
		)
	}
}

export default Form
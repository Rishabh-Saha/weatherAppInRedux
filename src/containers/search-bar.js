import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from './../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {
			term:''
		};

		this.onInputChange = this.onInputChange.bind(this); 
		//we can either do this or 
		//write onChange={event => this.onInputChange(event)} in input tag.
		//or make onInputChange(event){} to onInputChange = event => {} // change callback function to normal function

	}

	onInputChange(event){
		this.setState({
			term:event.target.value
		});
	}

	onFormSubmit = event => {
		event.preventDefault(); //on form's submition prevent form's default POST call

		//We need to go and fetch weather
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five day forecast in your favorite cities in India"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather:fetchWeather },dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);

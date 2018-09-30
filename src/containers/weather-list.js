import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Chart from './../components/chart';
import GoogleMap from './../components/google-map';


class WeatherList extends Component {
	renderWeather(cityData){
		const cityName = cityData.city.name;
		const cityTemperatures = _.map(cityData.list.map(weather => weather.main.temp),temp => temp-273);
		const cityHumidities = cityData.list.map(weather => weather.main.humidity);
		const cityPressures = cityData.list.map(weather => weather.main.pressure);
		const { lon,lat } = cityData.city.coord; // means extract lat and lon from coord and assign them to lat and lon

		return (
			<tr key={cityName}>
				<td> <GoogleMap lng={lon} lat={lat} /> </td>
				<td> <Chart color="orange" data={cityTemperatures} units="C"/> </td>
				<td> <Chart color="green" data={cityPressures} units="hPa"/> </td>
				<td> <Chart color="black" data={cityHumidities} units="%"/> </td>
			</tr>
		)
	}

	render(){
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th> City </th>
						<th> Temperature (C) </th>
						<th> Pressure (hPa) </th>
						<th> Humidity (%) </th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
};

function mapStateToProps({ weather }) { //extracting weather from state
	return { weather }; // Same as { weather: weather }
}


export default connect(mapStateToProps)(WeatherList);
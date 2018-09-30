import React, { Component } from 'react';

class GoogleMap extends Component {

	componentDidMount(){
		new google.maps.Map(this.refs.map,{ 
			zoom: 11,
			center:{
				lat: this.props.lat,
				lng: this.props.lng
			}
		})
	}

	render() {
		return <div ref="map" />; // we get a direct DOM reference of div tag (used above this.refs)
	}
}

export default GoogleMap;
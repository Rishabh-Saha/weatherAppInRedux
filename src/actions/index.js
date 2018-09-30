import axios from 'axios';


const WEATHER_API_KEY = '66c3f092f71ac59522c9f8dcec62d73f';
const WEATHER_ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

//action-types
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city){
	const url = `${WEATHER_ROOT_URL}&q=${city},in`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request // react-redux will see that the payload is a promise, it will resolve the promise and only end the resolved data to our reducer
	};
	//So the flow is action creator --> react-redux middleware --> reducers
	//if the payload is a promise, the middleware will stop the action flow to the reducer
	//it will wait till the promise is resolved then create a new action whose payload is the resolved promise data
	//and then pass it to the reducer
}
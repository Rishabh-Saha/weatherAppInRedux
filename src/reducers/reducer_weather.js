import { FETCH_WEATHER } from './../actions/index';

export default function(state=[],action){
	switch(action.type){
		case FETCH_WEATHER:
			// return state.concat([action.payload.data]); 
			return [ action.payload.data, ...state]; //Same as above line // this returns [city,city,city] and NOT [city,[city,city]]
			//IMPORTANT:
			//Do not use state.push because it mutates the existing state which is a big NO NO
			//we should rather return a new instance of state
			//state.concat returns a new array rather than mutating the existing one
	}
	return state;
}
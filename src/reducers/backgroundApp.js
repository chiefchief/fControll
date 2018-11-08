export const SET_TIME = 'backgroundApp/SET_TIME';

const initialState = false;

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_TIME:
			return action.time;
		default:
			return state;
	}
};

export const updateTime = () => (dispatch) => {
	new Date().getHours() >= 6 && new Date().getHours() <= 19 ? dispatch(setTime(true)) : dispatch(setTime(false));
};

export const setTime = (time) => ({
	type: SET_TIME,
	time
});

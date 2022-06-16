import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
	name: 'dashboardSlice',

	initialState: {
		dashboardList: [],
	},

	reducers: {
		addDashboard(state, action) {
			let newList = [...state.dashboardList];
			newList.push(action.payload);
			state.dashboardList = newList;
		},

		deleteDashboard(state, action) {
			let newList = state.dashboardList.filter(item => item.id !== action.payload.id);
			newList.forEach((item, index) => item.id = index + 1);
			state.dashboardList = newList;
		},

		editDashboard(state, action) {
			state.dashboardList = state.dashboardList.map(item => {
				return item.id === action.payload.id ? action.payload : item;
			});
		}
	}
});

export default dashboardSlice.reducer;

export const {
	addDashboard,
	deleteDashboard,
	editDashboard
} = dashboardSlice.actions;
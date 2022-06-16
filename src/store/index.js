import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dashboardSlice from './slice/board/dashboard/DashboardSlice'

const rootReducer = {
    dashboardReducer: dashboardSlice,
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})
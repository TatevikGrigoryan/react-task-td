import React from 'react';
import projectRoutes from './board/projectRoutes';
import dashboardRoutes from './board/dashboardRoutes';

export const publicRoutes = [
  {
    path: '',
    component: '',
    exact: ''
  }
];

export const privateRoutes = [
  {
    path: '',
    component: '',
    exact: ''
  }
];

export const boardRoutes = [
  ...projectRoutes,
  ...dashboardRoutes
];
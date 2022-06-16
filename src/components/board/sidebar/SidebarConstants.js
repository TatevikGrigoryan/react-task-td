import {
    FaAlignJustify,
    FaCalendarAlt,
    FaClipboardList,
    FaRegCalendarCheck,
    FaRegChartBar, FaTable,
    FaThList
} from 'react-icons/fa';
import React from 'react';

export const sidebarConst = [
  {
    name: 'Project',
    route: '/project',
    icon: <FaThList />,
    subMenu: [
      {
        name: 'Details',
        icon: <FaRegCalendarCheck />,
        route: '/project/details'
      },
      {
        name: 'Activity',
        icon: <FaAlignJustify />,
        route: '/project/activity'
      },
      {
        name: 'Indicators',
        icon: <FaRegChartBar />,
        route: '/project/indicators'
      },
      {
        name: 'Forms',
        icon: <FaClipboardList />,
        route: '/project/forms'
      },
      {
        name: 'Data Tables',
        icon: <FaCalendarAlt />,
        route: '/project/dataTables'
      }
    ]
  },

  {
    name: 'Dashboards',
    route: '/dashboards',
    icon: <FaTable />,
    subMenu: []
  }
];
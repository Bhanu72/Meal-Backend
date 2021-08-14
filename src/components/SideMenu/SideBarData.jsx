import React from 'react';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';


export const SideBarData = [
  {
    title: 'Meal Plan',
    path: '/',
    icon: <LocalDiningIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Manage User',
    path: '/manageuser',
    icon: <PersonIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Login Activities',
    path: '/loginactivities',
    icon: <SettingsIcon />,
    cName: 'nav-text'
  },
  
];
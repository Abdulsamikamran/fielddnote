import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdDashboard,
  MdOutlineArticle,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NotePage from 'views/admin/note';

// Auth Imports
import SignInCentered from 'views/auth/signIn';
import SignUpCentered from 'views/auth/signUp';
import IdentityVerification from 'views/auth/identity-verification';
import WelcomePage from 'views/auth/welcome';
import ReportsPage from 'views/admin/reports';
import ReportReview from 'views/admin/reports/reportReview';
import { FaFolder } from 'react-icons/fa';
import FileMangerPage from 'views/admin/file-manager';

const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdDashboard} width="24px" height="24px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Reports',
    layout: '/admin',
    path: '/reports',
    icon: (
      <Icon as={MdOutlineArticle} width="24px" height="24px" color="inherit" />
    ),
    component: <ReportsPage />,
  },
  {
    name: 'File Manager',
    layout: '/admin',
    path: '/file-manager',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <FileMangerPage />,
  },
  {
    name: 'Note',
    layout: '/admin',
    path: '/default/note',
    icon: <Icon as={MdDashboard} width="24px" height="24px" color="inherit" />,
    component: <NotePage />,
    sidebar: false,
  },

  {
    name: 'Reports Review',
    layout: '/admin',
    path: '/reports/review',
    icon: (
      <Icon as={MdOutlineArticle} width="24px" height="24px" color="inherit" />
    ),
    component: <ReportReview />,
    sidebar: false,
  },

  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
    sidebar: false,
  },
  {
    name: 'Sign Up',
    layout: '/auth',
    path: '/sign-up',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignUpCentered />,
    sidebar: false,
  },
  {
    name: 'Identity Verification',
    layout: '/auth',
    path: '/identity-verification',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <IdentityVerification />,
    sidebar: false,
  },
  {
    name: 'Welcome Page',
    layout: '/auth',
    path: '/welcome',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <WelcomePage />,
    sidebar: false,
  },
  // {
  //   name: 'RTL Admin',
  //   layout: '/rtl',
  //   path: '/rtl-default',
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  //   component: <RTL />,
  // },
];

export default routes;

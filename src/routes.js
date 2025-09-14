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
import AudioFilesPage from 'views/admin/file-manager/audioFiles';
import AudioClipDetails from 'views/admin/file-manager/audioClipDetails';
import TranscribePage from 'views/admin/file-manager/transcribe';
import AudioTrimPage from 'views/admin/file-manager/audioTrim';
import AffectedFilesPage from 'views/admin/file-manager/affectedFiles';
import AudioRecordingPage from 'views/admin/audio-recording';
import AudioSettingPage from 'views/admin/audio-recording/audioSetting';
import DetailRecordingPage from 'views/admin/audio-recording/detailRecording';
import { IoSettingsSharp } from 'react-icons/io5';
import SettingsPage from 'views/admin/settings';
import EditProfilePage from 'views/admin/settings/editProfile';
import AboutUsPage from 'views/admin/settings/aboutUs';
import PairedDevicePage from 'views/admin/settings/pairedDevice';
import FAQPage from 'views/admin/settings/Faq';
import SubscriptionPage from 'views/admin/settings/updateSubscription';
import CheckoutPage from 'views/admin/settings/checkout';
import MyPlanPage from 'views/admin/settings/myPlan';

const routes = [
  //Main SideBar Routes
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
    name: 'Settings',
    layout: '/admin',
    path: '/settings',
    icon: (
      <Icon as={IoSettingsSharp} width="24px" height="24px" color="inherit" />
    ),
    component: <SettingsPage />,
  },

  //Children | Non-Sidebar Routes3
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
    name: 'Audio Files',
    layout: '/admin',
    path: '/file-manager/audio-files',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <AudioFilesPage />,
    sidebar: false,
  },
  {
    name: 'Audio Clip Details',
    layout: '/admin',
    path: '/file-manager/audio-files/audio-details',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <AudioClipDetails />,
    sidebar: false,
  },
  {
    name: 'Audio Transcription',
    layout: '/admin',
    path: '/file-manager/audio-files/transcribe',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <TranscribePage />,
    sidebar: false,
  },
  {
    name: 'Audio Trim',
    layout: '/admin',
    path: '/file-manager/audio-files/trim',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <AudioTrimPage />,
    sidebar: false,
  },
  {
    name: 'Affected Files',
    layout: '/admin',
    path: '/file-manager/affected-files',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <AffectedFilesPage />,
    sidebar: false,
  },
  {
    name: 'Audio Recording',
    layout: '/admin',
    path: '/audio-recording',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <AudioRecordingPage />,
    sidebar: false,
  },
  {
    name: 'Audio Trim Setting',
    layout: '/admin',
    path: '/audio-recording/audio-recording-trim',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <AudioSettingPage />,
    sidebar: false,
  },
  {
    name: 'Detail Recording',
    layout: '/admin',
    path: '/audio-recording/detail-recording',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <DetailRecordingPage />,
    sidebar: false,
  },
  {
    name: 'Edit Profile',
    layout: '/admin',
    path: '/settings/edit-profile',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <EditProfilePage />,
    sidebar: false,
  },
  {
    name: 'Update Subscription',
    layout: '/admin',
    path: '/settings/update-subscription',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <SubscriptionPage />,
    sidebar: false,
  },
  {
    name: 'Checkout',
    layout: '/admin',
    path: '/settings/update-subscription/checkout',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <CheckoutPage />,
    sidebar: false,
  },
  {
    name: 'My Subscrption Plan',
    layout: '/admin',
    path: '/settings/update-subscription/my-plan',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <MyPlanPage />,
    sidebar: false,
  },
  {
    name: 'Paired Device',
    layout: '/admin',
    path: '/settings/paired-devices',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <PairedDevicePage />,
    sidebar: false,
  },
  {
    name: 'About Us',
    layout: '/admin',
    path: '/settings/about-us',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <AboutUsPage />,
    sidebar: false,
  },
  {
    name: 'FAQs',
    layout: '/admin',
    path: '/settings/faq',
    icon: <Icon as={FaFolder} width="24px" height="24px" color="inherit" />,
    component: <FAQPage />,
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

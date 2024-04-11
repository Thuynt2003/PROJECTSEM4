import { lazy } from 'react';
import Teachers from '../pages/_Teachers/Teachers';
const Students = lazy(() => import('../pages/Students/Student-list'));
const SchoolYears = lazy(() => import('../pages/School-years/School-years'));
const ClassesList = lazy(() => import('../pages/Classes/Classes-list'));
const NotFound = lazy(() => import('../pages/404page'));
const Attendence = lazy(()=>import('../pages/Study-and-practise/Attendence'))
const Acknowledge = lazy(()=>import('../pages/Study-and-practise/Acknowledge'))
const Evaluate = lazy(()=>import('../pages/Study-and-practise/Evaluate'))


const coreRoutes = [
  {
    path: '*',
    title: 'NotFound',
    component: NotFound,
  },
  {
    path: '/students',
    title: 'Students',
    component: Students,
  },
  {
    path: '/school-years',
    title: 'School Years',
    component: SchoolYears,
  },
  {
    path: '/classes',
    title: 'Classes',
    component: ClassesList,
  },
  {
    path: '/teachers',
    title: 'Teachers',
    component: Teachers,
  },
  {
    path: '/attendence',
    title: 'Attendence',
    component: Attendence,
  },
  {
    path: '/acknowledge',
    title: 'Acknowledge',
    component: Acknowledge,
  },
  {
    path: '/evaluate',
    title: 'Acknowledge',
    component: Evaluate,
  },
];

const routes = [...coreRoutes];
export default routes;

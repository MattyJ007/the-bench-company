import Home from './components/HomeTab'

export const routes = {
  Home: {
    path: '/',
    exact: true,
    component: Home
  },
  About: {
    path: '/About',
    exact: true,
    component: Home
  },
  Gallery: {
    path: '/Gallery',
    exact: true,
    component: Home
  },
  Products: {
    path: '/Products',
    exact: true,
    component: Home
  },
  ContactUs: {
    path: '/ContactUs',
    exact: true,
    component: Home
  }
}

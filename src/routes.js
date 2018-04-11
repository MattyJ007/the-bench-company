import Home from './components/HomeTab'
import About from './components/AboutTab'
import Gallery from './components/GalleryTab'
import Products from './components/ProductsTab'
import ContactUs from './components/ContactUsTab'

export const routes = {
  Home: {
    path: '/',
    exact: true,
    component: Home
  },
  About: {
    path: '/About',
    exact: true,
    component: About
  },
  Gallery: {
    path: '/Gallery',
    exact: true,
    component: Gallery
  },
  Products: {
    path: '/Products',
    exact: true,
    component: Products
  },
  ContactUs: {
    path: '/ContactUs',
    exact: true,
    component: ContactUs
  }
}

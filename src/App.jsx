
//react router imports
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
//react imports
import RootLayout from './layouts/RootLayout'
import Productspage from './paages/Productspage';
import Cartpage from './paages/Cartpage';
//css imports
import './App.css'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Productspage />} />
      <Route path='cartpage' element={<Cartpage />} />

    </Route>
  ));
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App


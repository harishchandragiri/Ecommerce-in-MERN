import { useState, lazy, Suspense} from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import Loading from './components/Loading'

const Search= lazy(()=> import('./pages/Search'))
const Cart=  lazy(()=> import('./pages/Cart'))
const Home = lazy(()=> import('./pages/Home')) 
const ProductCart = lazy(()=> import('./components/Product-Cart')) 
const Shipping = lazy(()=> import('./pages/Shipping')) 


function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
{/* header */}
      <Header/>
        <Suspense fallback={<Loading/>}>
          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/productcart' element={<ProductCart/>}/>
            {/* loggedIn files only */}
            <Route>
              <Route path='/shipping' element={<Shipping/>}/>
            </Route>

          </Routes>
        </Suspense>
      </Router>
  )
}

export default App

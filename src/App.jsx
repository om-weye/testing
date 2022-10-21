import { useState } from 'react'
import NavigationBar from './Component/Header/NavigationBar'
import Carousel from './Component/Header/Carousel'
import { Routes, Route} from "react-router-dom";
import Home from './Component/Routes/Home'
import About from './Component/Routes/About'
import Error from './Component/Routes/Error';
import Contact from './Component/Routes/Contact';
import CompanyDetails from './Component/Routes/CompanyDetails';
import CompanySetting from './Component/Routes/CompanySetting';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      App
      <NavigationBar/>
      <Carousel/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path ='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* : is used for fetching data written after /company/: AccioJob => we can fetch AccioJob via useParams */}
        <Route path='/company/:companyID' element={<CompanyDetails/>}/>
        <Route path='/company/:companyID/:setting' element={<CompanySetting/>} />
        <Route path ='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App

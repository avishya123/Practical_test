import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import SalesEntry from './components/SalesEntry';
import Createheader from './components/Createheader';
import Createdetail from './components/Createdetail';
import './components/style.css'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
     <Route path="/" element={<SalesEntry/>}/>
     <Route path="/createheader" element={<Createheader/>}/>
     <Route path="/createdetail" element={<Createdetail/>}/>
     </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App

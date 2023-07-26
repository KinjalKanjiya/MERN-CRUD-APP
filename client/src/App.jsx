import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import Users  from './Users'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
        <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/"element={<Users />}/>
        <Route path='/create' element={<CreateUser /> }></Route>
        <Route path='/update/:id' element={<UpdateUser />}></Route>

      </Routes>
   </div>
    </BrowserRouter>
  );
}

export default App;

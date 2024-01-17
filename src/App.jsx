import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Alldata from './component/Alldata'
import Navigation from './component/Navigation'
import Partcode from './component/Partcode'
import InsertPart from './component/Insertpart'
import Insertcat from './component/Insertcat'

const App = () => {
  return (
    <>
    <h1>Home page</h1>
    <Navigation/>
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/alldata' Component={Alldata}/>
        <Route path='/partcode' Component={Partcode}/>
        <Route path='/insertpart' Component={InsertPart}/>
        <Route path='/insertcat' Component={Insertcat}/>
        
    </Routes>
    </>
  )
}

export default App
import React from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import { TaskContextProvider } from './context/TaskProvider.jsx'
import FormTask from './pages/FormTask'
import NotFound from './pages/NotFound'
import TasksPage from './pages/TasksPage'

function App() {
  return (
    <TaskContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<TasksPage/>}/>
        <Route path='/new' element={<FormTask/>}/>
        <Route path='/edit/:id' element={<FormTask/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </TaskContextProvider>
  )
}

export default App

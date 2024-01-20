import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { Proyects } from './components/proyects/Proyects'
import { Skills } from './components/skills/Skills'
import { Contact } from './components/contact/Contact'
import './App.scss'


export const App = () => {
  return (
    <>
    <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/proyects' element={<Proyects></Proyects>}></Route>
            <Route path='/skills' element={<Skills></Skills>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/*' element={<Navigate to={'/'}/>} ></Route>
        </Routes>
    </>
  )
}

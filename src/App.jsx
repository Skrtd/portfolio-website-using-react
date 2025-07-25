import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import NoteFound from "./pages/NotFound";
import { Toaster } from '@/components/ui/toaster';

function App() {
 

  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NoteFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

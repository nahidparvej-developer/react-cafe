import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import Blogs from './main-section/Blogs';
import Bookmarks from './main-section/Bookmarks';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <main className='mx-20 flex justify-between mt-10'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </main>
    </>
  )
}

export default App

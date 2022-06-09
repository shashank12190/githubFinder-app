import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Alert from './Components/layout/Alert'
import Footer from './Components/layout/Footer'
import Navbar from './Components/layout/Navbar'
import About from './Components/pages/About'
import Home from './Components/pages/Home'
import NotFound from './Components/pages/NotFound'
import User from './Components/pages/User'
import { AlertProvider } from './context/AlertContext/AlertContext'
import { GithubProvider } from './context/GithubFinderContext'
function App() {
  return (
    <>
      <GithubProvider>
        <AlertProvider>

          <Router>
            <div className="flex flex-col justify-between h-screen">
              <Navbar />

              <main className='container mx-auto px-3 pb-12'>
                <Routes>
                  <Route path={'/'} element={<><Alert /><Home /></>} />
                  <Route path={'/about'} element={<About />} />
                  <Route path={'/about'} element={<NotFound />} />
                  <Route path={'/*'} element={<NotFound />} />
                  <Route path={'/users/:login'} element={<User />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </AlertProvider>
      </GithubProvider>
    </>
  )
}
export default App
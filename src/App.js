import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import Detail from './routes/Detail';
import LoadingPage from './components/LoadingPage';
function App() {
  return (
  <Router>
    <Routes>
      <Route basename={process.env.PUBLIC_URL} path='/movie/:id' element={<Detail />} />
    </Routes>
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}/>
    </Routes>
  </Router>
  )
}
export default App;

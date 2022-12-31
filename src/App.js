
import Navbar from './navbar';
import Home from './home';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetail from './BlogDetail';
import Create from './Create';
import NotFound from './NotFound';

function App() {
 
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='blogs/:id' element={<BlogDetail/>}/>
              <Route path='/create' element={<Create />}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;

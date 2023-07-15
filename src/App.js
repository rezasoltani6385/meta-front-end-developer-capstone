import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
import BookingPage from './BookingPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/booking' element={<BookingPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;

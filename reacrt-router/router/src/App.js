import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import HomePage from './components/HomePage';
import AboutPage from './components/Page/AboutPage';
import ContactPage from './components/ContactPage';
import NotFound from './components/NotFound';
import AboutUsers from './components/Page/AboutUsers';
import AboutProduct from './components/Page/AboutProduct';
import IndexAbout from './components/IndexAbout';
import ProductPage from './components/ProductPage';
import Login from './components/sign_in/Login';
import Checkout from './components/sign_in/Checkout';
import CourseDetail from './components/Dynamic/CourseDetail';
import CourseTypeId from './components/Dynamic/CourseTypeId';
import Course from './components/Dynamic/Course';


function App() {
  const activeStyle = ({isActive}) => ({
    color: isActive ? "red": "black",
    backgroundColor: isActive ? "black": "red"

  })
// isActive là cú pháp bắt buộc
  
  return (
    <div >
      {/* Sử dụng Link */}
      {/* <ul>
        <li>
          <Link to='/'>Home Page</Link>  
        </li>
       
        <li>
          <Link to='/contact'>Contact Page</Link> 
        </li>

        <li>
          <Link to='/about'>About Page</Link>
          <ul>
            <li>
              <Link to='/about/aboutProduct'>About Product</Link>
            </li>
            <li>
              <Link to='/about/aboutUser'>About Users</Link>
            </li>
          </ul>
        </li>
      </ul> */}
      {/* Sư dụng NavLink */}
      {/* Navlink và Link giống nhau đều dùng để ánh xạ đến Route 
      Nhưng khi sử dụng NavLink thì: ClassName sẽ được active*/}

      <ul>
        <li>
          <NavLink to='/' style={activeStyle}>Home Page
          </NavLink>  
        </li>
       
        <li>
          <NavLink to='/contact'style={activeStyle}>Contact Page
          </NavLink> 
        </li>

        <li>
          <NavLink to='/about'style={activeStyle}>About Page</NavLink>
          <ul>
            <li>
              <NavLink to='/about/aboutProduct'style={activeStyle}>About Product</NavLink>
            </li>
            <li>
              <NavLink to='/about/aboutUser'style={activeStyle}>About Users</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <Link to='/checkout'>Thanh Toán</Link>
        </li>
      </ul>

      <ProductPage/>


      <Routes>
        <Route path='/' element={<HomePage/>}> </Route>
        <Route path='/contact' element={<ContactPage/>}> </Route>
        
        <Route path='/about' element={<AboutPage/>}>
          {/* Router index của About  */}
            <Route index element={<IndexAbout/>}></Route>
            {/* Nested Router (Định tuyến lồng nhau) */}
            <Route path='aboutProduct' element={<AboutProduct/>}></Route>
            <Route path='aboutUser' element={<AboutUsers/>}></Route>
        </Route>

        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/checkout' element={<Checkout/>}> </Route>
        {/* Dynamic Router */}
        <Route path='/course' element={<Course/>}> </Route>
        <Route path='/course/:id' element={<CourseDetail/>}> </Route>
        <Route path='/course/:type/:id' element={<CourseTypeId/>}> </Route>
        
        {/* luư y: đê router có path="*" để cuối cùng  */}
        <Route path='*' element={<NotFound/>}> </Route>
      </Routes>
        
    </div>
  );
}



// Các bước để thực hiện router

// Bước 1: npm install react-router-dom
// Bước 2: Cấu hình router ở trong src/index.jsx
// 	+ import { BrowserRouter as Router } from "react-router-dom";
// 	+ Bọc bên ngoài <App />
// Bước 3: Tạo các component
// Bước 4: Tạo các Routes và Route trong src/App.js tương ứng với component
// Bước 5: Tạo các Link or NavLink để ánh xạ đến các Route

export default App;

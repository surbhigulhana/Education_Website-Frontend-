
import './App.css';
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import { Home } from './component/Home';
import { Navbar } from './component/Navbar';
import Footer from './component/Footer';
import { Button } from './component/Button';
import CardM from './component/CardM';
import ThreeCard from './component/threeCard';
import Slider from './component/Slider';
import CardFoot from './component/CardFoot';
import Buildyourc from './component/secondBuild/Buildyourc';
import ThirdEarn from './component/ThirdEarn/ThirdEarn';
import IT from './component/Courses/IT COURSES/IT';
import ItSlider from './component/Courses/IT COURSES/ItSlider';
import Pagination from './component/Courses/IT COURSES/Pagination';
import Page2 from './component/Courses/IT COURSES/Page2';
import Assignment from './component/Assignment';
import Resume from './component/Resume&Assignmnet/Resume';
import Card3 from './component/Resume&Assignmnet/Card3';
import Contact from './component/Contact';
import Login from './component/Login';
import ForgetPasswordModal from './component/ForgotPasswordModal'
import ChangePassword from './component/ChangePassword';
import Registration from './component/Registration';


function App() {
  return (
    <div>
<Router>
  <Routes>
    <Route excat path='/' element={<Home/>}></Route>
    <Route excat path='/Navbar' element={<Navbar/>}></Route>
    <Route excat path='/Footer' element={<Footer/>}></Route>
    <Route excat path='/Button' element={<Button/>}></Route>
    <Route excat path='/CardM' element={<CardM/>}></Route>
    <Route excat path='/threeCard' element={<ThreeCard/>}></Route>
    <Route excat path='/Slider' element={<Slider/>}></Route>
    <Route excat path='/CardFoot' element={<CardFoot/>}></Route>
    <Route excat path='/Buildyourc' element={<Buildyourc/>}></Route>
    <Route excat path='/ThirdEarn' element={<ThirdEarn/>}></Route>
    <Route excat path='/IT' element={<IT/>}></Route>
    <Route excat path='/IiSlider' element={<ItSlider/>}></Route>
    <Route excat path='/Pagination' element={<Pagination/>}></Route>
    <Route excat path='/Page2' element={<Page2/>}></Route>
    <Route excat path='/Assignment' element={<Assignment/>}></Route>
    <Route excat path='/Resume' element={<Resume/>}></Route>
    <Route excat path='/Card3' element={<Card3/>}></Route>
    <Route excat path='/Login' element={<Login/>}></Route>
    <Route excat path='/Contact' element={<Contact/>}></Route>
    <Route excat path='/Registration' element={<Registration></Registration>}></Route>
    <Route excat path='/setpassword/:email' element={<ChangePassword/>}></Route>
    <Route excat path='/ForgetPasswordModal' element={<ForgetPasswordModal/>}></Route>
  </Routes>
</Router>
    </div>
  );
}

export default App;

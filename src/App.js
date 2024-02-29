import "./App.css";
import{Routes,Route} from "react-router-dom"
import HomePage from "./components/pages/HomePage";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import { ErrorFour as NotFound } from './components/NotFound/NotFound';
import CreatePortfolio from "./components/pages/CreatePortfolio";
function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/create-portfolio" element={<CreatePortfolio/>} />
    </Routes>
   </div>
  );
}

export default App;

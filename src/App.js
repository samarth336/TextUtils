import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils"  about="About Us"/>
      <div className="container my-5">
      <Textform heading="Enter Your Text Here" />
      </div>
    </>
  );
}

export default App;

import './App.css';
import Navbar from './Component/Navbar';
import Body from './Component/Body';
import Box from './Component/Box';
import './index.css';
import Icons from './Component/Icons';
import Footer from './Component/Footer';
function App() {
  return (
    <>
      <div className=' '>
        <Navbar />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Box />
      </div>
      <div>
        <Icons />
      </div>
      <div>
        <Footer />
      </div> 


      


    </>
  );
}

export default App;

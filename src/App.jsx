import AppRouter from './app/source/routes/AppRouter';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer
        position='top-center' 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false}  
        closeOnClick 
        rtl={false}  
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
        theme='dark'
        transition={Bounce} 
      /> 

    </>
  );
}

export default App;

import AppRouter from './app/source/routes/AppRouter';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import ChatAi from './app/components/Whatsapp/ChatAi';

function App() {
  return (
    <>
      <AppRouter />
      {/* <ChatAi /> */}
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

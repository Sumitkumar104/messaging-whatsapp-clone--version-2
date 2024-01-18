import './App.css';
import Messenger from './Components/messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId = '246648691460-bsj1rub53iami1btvii0577h1on2je01.apps.googleusercontent.com';
  return (

    <GoogleOAuthProvider clientId={clientId}>

      <Messenger />

    </GoogleOAuthProvider>




  );
}

export default App;
import './App.css';
import { Route, Routes } from "react-router-dom";
import Signinpage from './Components/Authpage_v2_component/signinpage';
import Chatdialog from './Components/Chatdialog';
import { useContext, useEffect } from "react";
import { AccountContext } from './Components/Contextapi/Accountprovider';
import { useNavigate } from "react-router-dom";

function App() {
  const { account } = useContext(AccountContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Conditional navigation based on account existence
  //   if (account) {
  //     navigate("/");
  //   } else {
  //     navigate("/");
  //   }
  // }, [account, navigate]); // Ensure useEffect runs when 'account' or 'navigate' changes

  return (

    
    <Routes>
    {/* Conditional rendering based on account existence */}
    {account ? (
      <Route path="/" element={<Chatdialog />} />
    ) : (
      <Route path="/" element={<Signinpage />} />
    )}
  </Routes>


  );
}

export default App;

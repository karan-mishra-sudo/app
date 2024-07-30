import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {user,loginWithRedirect}= useAuth0();
  console.log(user)
  return (
    <div className="App">
      <header className='App-header'>
        <button onClick={(e) => loginWithRedirect()}>login with redirect</button>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from 'react';
import { app, database } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

function App() {
  // const auth = getAuth();
  
  const missionsCollectionRef = collection(database, 'missions');
  const usersCollectionRef = collection(database, 'users');
  
  
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value }

    setData({ ...data, ...inputs })
  }

  const addData = () => {
    // signInWithEmailAndPassword(auth, data.email, data.password)
  }

  const handlelogout = () => {
    // signOut(auth);
  }

  useEffect(() => {
    
  }, [])
  return (
    <div className="App-header">
      <input
        placeholder="Email"
        name="email"
        type="email"
        className="input-fields"
        onChange={event => handleInputs(event)}
      />
      <input
        placeholder="Password"
        name="password"
        type="password"
        className="input-fields"
        onChange={event => handleInputs(event)}
      />

      <button onClick={addData}>Log In</button>
      <button onClick={handlelogout}>Log out</button>
    </div>
  );
}

export default App;

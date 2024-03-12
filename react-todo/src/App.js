
import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

 import Todo from './component/Todo';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      < Todo />
      <ToastContainer />
     </div>
  );
}

export default App;



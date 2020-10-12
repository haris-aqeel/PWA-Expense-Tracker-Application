//Importing React
import React from 'react';

// Importing Style Components
import './App.css';

// Importing Components Of Application
import Header from './Components/Header';
import TotalBalance from './Components/TotalBalance';
import Transaction from './Components/Transaction';
import AddTransaction from './Components/AddTransaction';

// Importing Global State Provider i.e, Accessable to All Components
import StateProvider from './GlobalState/StateProvider'

//  Importing Reducer and Initial State 
import reducer, {initialState} from './GlobalState/reducer'


function App() {
  return (
    <div className="expense-tracker-application">
     <StateProvider initialState = { initialState } reducer = {reducer}>
      
       <Header />
       <TotalBalance />
       <Transaction />
       < AddTransaction />
      
  
     </StateProvider>
    
    </div>
  );
}

export default App;
  
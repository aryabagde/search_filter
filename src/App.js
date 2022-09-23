import { useState } from 'react';
import './App.css';
import Table from './Table';
import {Users} from './Users';

function App() {

  const [query, setQuery] = useState("");

  // const keys = ["first_name", "last_name", "email"]
  //console.log(Users[0]["email"]);
  //const search = (data) => {
  //   return data.filter((item)) =>
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //    )
  // }


  const search =(data)=>{
    return data.filter((item) => item.first_name.toLowerCase().includes(query) || item.last_name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query));
  }
  return (
    <div className="App">
      <input
      type="text"
      placeholder="Search.."
      className='search'
      onChange={(e) => setQuery(e.target.value)}      // e.target value is the current value of the placeholder
      />
      <Table data={search(Users)}/>
    </div>
  );
}

export default App;

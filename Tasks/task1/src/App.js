
import './App.css';

import { useEffect, useRef, useState } from 'react';
import region from './external-service';

function App() {
  const [rdata, setRdata] = useState([]);
  const [data, setdata] = useState([])
  const regions = region.getRegionsList();
  const langvage = region.getLanguagesList()

  const [show, setshow] = useState(false)
  function handlereg() {
    setRdata(regions)
    setshow(true)
  }
  function handlelang() {
    setRdata(langvage)
    setshow(true)
  }
  function handlechange(e) {
    let lst = region.getCountryListByRegion(e.target.value)
    if (lst.length == 0) lst = region.getCountryListByLanguage(e.target.value)
    setdata(lst)
  }
 const [count,setcount]=useState(1)
  const handelSort = (p) => {
    if(count){
    const sortedData = [...data].sort((a, b) => {
      let nameA = null; 
      let nameB = null;
      {p=='name'? nameA=a.name:nameA=a.area}
      {p=='name'? nameB=b.name:nameB=b.area}
      if (nameA < nameB) {
        return -1;  
      }
    });
    setcount(count-1)
    setdata(sortedData);
  }
  else{
    const nsortedData = [...data].sort((a, b) => {
      let nameA = null; 
      let nameB = null;
      {p=='name'? nameA=a.name:nameA=a.area}
      {p=='name'? nameB=b.name:nameB=b.area}
      if (nameA > nameB) {
        return -1;  
      }
    });
    setcount(count+1)
    setdata(nsortedData);
  }
 
  };
  
  return (
    <div className='App'> 
      <h1>Countries Search</h1>
      <div>
        <input
          type="radio"
          name="category"
          id="reg"
          value="region"

          onChange={handlereg}
        />
        <label htmlFor="reg">Region</label>

        <input
          type="radio"
          name="category"
          id="lang"
          value="language"

          onChange={handlelang}
        />
        <label htmlFor="lang">Language</label>

        <select onChange={handlechange} disabled={!show}>
          <option value="">slect value</option>
          {show ?
            rdata.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            )) : <option value={'empty'} >empty</option>
          }

        </select>
      </div>
      <table>
        <thead>
        <tr>
          <th>name <button onClick={()=>handelSort('name')}>{count==0 ? 'D':'A'}</button></th>
          <th>captal</th>
          <th>world region</th>
          <th>langvage</th>
          <th>area <button onClick={()=>handelSort('area')}>{count==0 ? 'A':'D'}</button></th>
          <th>flag</th>
        </tr>
  </thead>
        {data.map((e,i) => (

          <tr key={i}>{[
            <td>{e.name}</td>,
            <td>{e.capital}</td>,
            <td>{e.region}</td>,
            <td>{Object.values(e.languages).map((ele) => (
              <>{ele + " "}</>
            ))}</td>,
            <td>{e.area}</td>,
            <td><img src={e.flagURL} alt="" /></td>
          ]
          }</tr>
        ))}
      </table>
    </div>
  );
}

export default App;

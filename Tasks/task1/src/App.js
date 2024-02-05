
import './App.css';

import { useEffect, useRef, useState } from 'react';
import region from './external-service';

function App() {
  const [rdata, setRdata] = useState([]);
  const [data,sethata]=useState([])
  const regions = region.getRegionsList();
  const langvage=region.getLanguagesList()

 const [show,setshow]=useState(false)
 function handlereg(){
  setRdata(regions)
  setshow(true)
 }
 function handlelang(){
  setRdata(langvage)
  setshow(true)
 }
 function handlechange(e){
let lst= region.getCountryListByRegion(e.target.value)
if(lst.length==0)  lst= region.getCountryListByLanguage(e.target.value)
sethata(lst)
 }
 console.log(data);
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
        
      <select  onChange={handlechange} disabled={!show}>
        <option value="">slect value</option>
        {show?
        rdata.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        )):<option value={'empty'} >empty</option>
      }
        
      </select>
      </div>
<table>
  <tr>
    <th>name</th>
    <th>captal</th>
    <th>world region</th>
    <th>langvage</th>
    <th>area</th>
    <th>flag</th>
  </tr>

  {data.map((e)=>(
    <tr>{[
      <td>{e.name}</td>,
      <td>{e.capital}</td>,
      <td>{e.region}</td>,
      <td>{Object.values(e.languages).map((ele)=>(
        <>{ele+" "}</>
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

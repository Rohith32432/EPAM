
import './App.css';

import { useEffect, useRef, useState } from 'react';
import region from './external-service';

function App() {
  const [rdata, setRdata] = useState([]);
  const [data,setdata]=useState([])
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
setdata(lst)
 }
 console.log(data);
  return (
    <div className='App'>
      <h1>Countries Search</h1>
      <input type="radio" name="region" id=""  onClick={handlereg}/> region
      <input type="radio" name="language" id="" onClick={handlelang} />langvage

      <select  onChange={handlechange} disabled={!show}>
        {show?
        rdata.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        )):<option value={'empty'} >empty</option>
      }
        
      </select>
{data.map((e)=>([
  <p>{JSON.stringify(e)}</p>
]))}
    </div>
  );
}

export default App;

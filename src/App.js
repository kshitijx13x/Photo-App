import logo from './logo.svg';
import './App.css';
import {Get_Images,Search_Images} from './api'
import Photos from './Photos';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import Button from '@material-ui/core/Button';


function App() {

  const display_Photos=()=>
  {
    if(data2==="")
    {
      console.log(data2)
      return(
      data.map((image)=>
      {
        
        return(
          
          <Photos url={image.urls.small}/>
          
        )
      
       
     
      })
      )
    }
    else{
      return(
      data3.map((image)=>
      {
        console.log(data2)
        
        return(
          
          <Photos url={image.urls.small}/>
          
        )
      
       
     
      })
      )
    }
  }


  const [input,setInput] = useState();
   const [data2,setData2] = useState();
   const inputTextValue=(event)=>
   {
     
     console.log(event.target.value);
     const query = event.target.value;
     setInput(query);

   }

   const clicked=()=>
   {
     console.log(input)
      setData2(input);
      setPage(1)
   }

  const data = Get_Images();
  console.log("The data is"+data);
  console.log(data2)
 const [page,setPage] = useState(1); 
  console.log(page)
  const data3 = Search_Images(data2,page);
  console.log(data3);

  
  const prev = () =>
  {
    if(page>1)
    {
    setPage(page-1)
    console.log(page)
    }
  }
  const next = ()=>
  {
    setPage(page + 1);
    console.log(page)
    return page
    

  }
  return (
    <>
    <h1>Photos</h1>
    <div className="Search">
      
    <button className="page_btn" onClick={prev}>Prev</button>
    <button onClick={clicked}>
    <SearchIcon color="secondary"/>
    </button>
      <TextField fullWidth="true"   id="filled-basic"  variant="filled" onChange={inputTextValue}  >
          
        </TextField>
      <button className="page_btn"  onClick={next}>Next</button>
      
      </div>
   
   
   
   
    <div className="container">
   
      {display_Photos()}
     
      {/* {
      
      data3.map((image)=>
      {
        
        return(
          
          <Photos url={image.urls.small}/>
          
        )
      
       
     
      })} */}

  </div>   
      
   </>
  );
}

export default App;

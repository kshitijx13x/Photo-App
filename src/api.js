import axios from 'axios';
import React, { useState, useEffect ,} from 'react';

const count = 1;
function Get_Images()
{
     
    const [state,setState] = useState([]);
    useEffect(()=>
    {
    axios.get("https://api.unsplash.com/photos?client_id=rn-Xcg68L98GwEs8E4dakEJgtGfBoqXcFRKzLS9NcjU").then((data)=>
    {
        setState(data.data);
        console.log(data)
        
    })
},[count]);
    return state;
   
}

function Search_Images(data2,page_no)
{
     console.log(page_no);
    const [search,setSearch] = useState([]);
    useEffect(()=>
    {
       
        
    axios.get(`https://api.unsplash.com/search/photos?query=${data2}&page=${page_no}&per_page=30&client_id=rn-Xcg68L98GwEs8E4dakEJgtGfBoqXcFRKzLS9NcjU`).then((data)=>
    {
        setSearch(data.data.results);
        console.log(data.data.results);
        
    })
   

},[data2,page_no]);
    return search;
   
}

export {Get_Images,Search_Images};
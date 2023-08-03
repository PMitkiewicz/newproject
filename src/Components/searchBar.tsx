import React, {FC, useState, InputHTMLAttributes} from 'react'
import './searchBar.css'




interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

type Country ={
    name: string,
    continent: string,
    key: number
}

const SearchBar=()=> {


const [searchInput, setSearchInput]= useState("");


const countries: Country[] = [

    { name: "Belgium", continent: "Europe", key:1 },
    { name: "India", continent: "Asia", key:2 },
    { name: "Bolivia", continent: "South America", key:3 },
    { name: "Ghana", continent: "Africa", key:4 },
    { name: "Japan", continent: "Asia", key:5 },
    { name: "Canada", continent: "North America",key:6 },
    { name: "New Zealand", continent: "Australasia", key:7 },
    { name: "Italy", continent: "Europe", key:8 },
    { name: "South Africa", continent: "Africa", key:9 },
    { name: "China", continent: "Asia", key:10 },
    { name: "Paraguay", continent: "South America", key:11 },
    { name: "Usa", continent: "North America", key:12 },
    { name: "France", continent: "Europe", key:13 },
    { name: "Botswana", continent: "Africa", key:14 },
    { name: "Spain", continent: "Europe", key:15 },
    { name: "Senegal", continent: "Africa", key:16 },
    { name: "Brazil", continent: "South America", key:17 },
    { name: "Denmark", continent: "Europe", key:18 },
    { name: "Mexico", continent: "South America", key:19 },
    { name: "Australia", continent: "Australasia", key:20 },
    { name: "Tanzania", continent: "Africa", key:21 },
    { name: "Bangladesh", continent: "Asia",key:22 },
    { name: "Portugal", continent: "Europe",key:23 },
    { name: "Pakistan", continent: "Asia",key:24 }
  
  ];


  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.currentTarget.value);

  };
  

      const filtered=countries.filter((country) => {
      return country.name.match(searchInput);
  });
  console.log(filtered)


  
  
  return(<div>
    <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput} />
    <table className="SearchTable">
    <tr>
    <th>Country</th>
    <th>Continent</th>
  </tr>
  {filtered.map((country, index) => {
    if (searchInput !== ""){ 
return(
<div className="SearchTable">
  <tr>
    <td>{country.name}</td>
    <td>{country.continent}</td>
  </tr>
</div>
)
    }
})}
    </table>
  </div>)
}

  
  export default SearchBar;
   
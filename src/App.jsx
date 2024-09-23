import axios from "axios"
import { useRef, useState } from "react";
import Card from "./Card";

const App = ()=>{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();


  const searchWeather =(event)=>{
    event.preventDefault();
    setLoading(true)

    axios.get(`https://api.weatherapi.com/v1/current.json?key=6603ca9e8f34494282d81834240409&q=${inputRef.current.value}&aqi=no`)
    .then((res) => {
      setData([res.data, ...data])
      console.log(inputRef.current.value);
      inputRef.current.value = null 
      setLoading(false)
    }).catch((err)=>{
      console.log(err);
      alert("Invalid city name :/")
      inputRef.current.value = null 
      setLoading(false)
    })
      
  } 
  

  return (
    <>

    <div className="mx-3">
    <h1 className="mb-5 mt-2 bg-clip-text mx-auto text-transparent text-center bg-gradient-to-r from-sky-600 via-emerald-900 to-cyan-500 text-5xl font-bold">
    Weather App
</h1>

<div  className="relative w-full max-w-xl mt-8 mx-auto bg-white rounded-full">
  <form onSubmit={searchWeather}>
  <input ref={inputRef} placeholder="Search weather e.g. Karachi , Islamabad" className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-emerald-200 focus:border-emerald-200" type="text" name="query" id="query"/>
  <button type="submit" className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-emerald-600 sm:px-6 sm:text-base sm:font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
    <svg className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>{loading ? "Loading" : "Search"}
  </button>
  </form>
</div>

<div className="w-full flex flex-wrap items-center z-10 justify-center">
    {data.length > 0 ? data.map((item , index) => {
      return <div key={index} className="flex flex-wrap justify-center m-5">
          <Card src={item.current.condition.icon} text={item.current.condition.text} temp={item.current.temp_c} name={item.location.name} country={item.location.country} />
        </div> 
      }) : loading ? <div role="status">
      <svg aria-hidden="true" className="inline mt-28 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
      <span className="sr-only">Loading...</span>
  </div> : <h1
      className="text-4xl border-green-500 border shadow-md rounded-3xl p-3 mt-28 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-emerald-600 to-green-700">
      No Weather Found.
  </h1>}
      </div>
   
   
    </div>
    </>
  )
}
export default App
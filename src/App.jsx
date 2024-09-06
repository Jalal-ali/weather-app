import axios from "axios"
import { useRef, useState } from "react";

const App = ()=>{
  // const [data, setData] = useState([]);
  // const inputRef = useRef();

  // const searchWeather = async (event)=>{
  //   event.preventDefault();
  //   console.log(inputRef.current.value);
  //   const res = await axios(`http://api.weatherapi.com/v1/current.json?key=6603ca9e8f34494282d81834240409&q=${inputRef.current.value}&aqi=no`)
  //   setData([res.data, ...data])
  //   inputRef.current.value = null 
  // } 
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  //use ref for getting form value
  const inputRef = useRef(null);

  //show weather function
  const showWeather = (event) => {
    event.preventDefault();
    axios.get(`https://api.weatherapi.com/v1/current.json?key=6603ca9e8f34494282d81834240409&q=${inputRef.current.value}&aqi=no`)
      .then((res) => {
        // console.log('res==>', res.data);
        setData([res.data, ...data]);
        inputRef.current.value = '';
      })
      .catch(() => {
        // console.log(err);
        alert('no such city');
        inputRef.current.value = '';
      })
  }
  

  

  return (
    <>
    <div className='h-[100vh]'>
      <h1 className="text-3xl text-center mt-2  font-extrabold">
        Weather App
      </h1>
      <form onSubmit={showWeather}>
      <div className='w-[50%] mx-auto mt-[3%]'>
        <input ref={inputRef} className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="City Name" />
      </div>
      <div className='text-center'>
        <button  type='submit' className="bg-blue-500 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg mt-5">{'Show Weather'}</button>
      </div>
      </form>
    {/* <h1 className="mb-5 mt-2 bg-clip-text text-transparent text-center bg-gradient-to-r from-teal-700 via-lime-400 to-cyan-500  text-5xl font-black">
    Weather App
</h1>
    <div className="flex flex-wrap justify-content">

<div className="relative w-full max-w-xl mt-4 mx-auto bg-white rounded-full">
  <form onSubmit={searchWeather}>
  <input ref={inputRef} placeholder="Search weather e.g. karachi , islamabad" className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200" type="text" name="query" id="query"/>
  <button type="submit" className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
    <svg className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
    Search
  </button>
  </form>
</div> */}

<div  className="w-full flex flex-wrap items-center justify- justify-center">
    {data.length > 0 ? data.map((item , index) => {
      return <div key={index} className=" bg-slate-300 m-3 p-8 bg-opacity-80 rounded-3xl flex space-x-12 items-center shadow-lg border-t-2 border-green-300">
          <div>
           <img src={item.current.condition.icon} alt="img" />
            <p className="text-center text-gray-500 mt-2 text-sm">{item.current.condition.text}</p>
            </div>
          <div>
            <p className="text-6xl font-bold text-right mb-4 text-gray-900">{item.current.temp_c}°</p>
            <p className="text-gray-500 text-sm">{item.location.name + ',' + item.location.country}</p>
          </div>
        </div> 
      }) : <h1
      className="text-4xl mt-28 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-800 via-lime-600 to-cyan-700">
      No Weather Found.
  </h1>}
      </div>
   
   
    </div>
    </>
  )
}
export default App
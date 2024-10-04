const Card = ({src , text ,temp , name , country} ) => {

  return (
    <>
    <div className="bg-teal-600 p-8 bg-opacity-70 border-t-2 border-b-2 border-gray-600 border-opacity-60 rounded-3xl flex space-x-12 items-center shadow-lg">
    <div>
        <img src={src} alt="img" className="border rounded-3xl bg-emerald-600 bg-opacity-20 p-2 shadow-md border-transparent" />
            <p className="text-center text-slate-800 mt-2 text-sm">{text}</p>
            </div>
      <div>
            <p className="text-6xl font-bold text-right mb-4 text-slate-950">{temp}°</p>
            <p className="text-gray-800 text-sm   font-semibold">{ name + ',' + country}</p>
          </div>
  </div>

    </>
  )
}
export default Card

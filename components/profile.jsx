const Profile = ({ info }) => {
  return (
    <div className="grid sm:grid-cols-3 sm:p-[5vw]">
      <img src={info[5]} alt="User" className="w-[15vh] h-[15vh] sm:w-[12vw] sm:h-[12vw] object-cover rounded-[50%] border-4 border-green-500 row-span-2 justify-self-center"/>
      <div className="grid p-[5vw] justify-self-center sm:col-span-2">
        <p className="self-center xl:text-2xl xl:mt-[3%] text-white xl:flex">Nombre: <strong className="text-[#53AFEE] ml-[0.7vw]">{`${info[0]} ${info[1]}`}</strong></p>
        <p className="self-center xl:text-2xl xl:mt-[3%] text-white xl:flex">Teléfono: <strong className="text-[#53AFEE] ml-[0.7vw]">{info[2]}</strong></p>
        <p className="self-center xl:text-2xl xl:mt-[3%] text-white xl:flex">Edad: <strong className="text-[#53AFEE] ml-[0.7vw]">{info[3]}</strong></p>
        <p className="self-center xl:text-2xl xl:mt-[3%] text-white xl:flex">Dirección: <strong className="text-[#53AFEE] ml-[0.7vw]">{info[4]}</strong></p>
      </div>
    </div>
  )
}

export default Profile
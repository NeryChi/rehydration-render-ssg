import Image from "next/image"

const Profile = ({ user }) => {

  console.log(user)

  let info = [
    user[0].first ? user[0].first : '',
    user[0].last ? user[0].last : '',
    user[1] ? user[1] : '',
    user[2].age ? user[2].age + ' años' : '',
    user[3] ? user[3].city + ', ' + user[3].country : '',
    user[5] ? user[5].large : '/trasparent.png'
  ]

  return (
    <div className="grid grid-cols-3">
      <div className="grid col-span-2">
        <p className="ml-[10%] self-center text-white flex">Nombre: <p className="text-[#53AFEE] ml-[0.7vw]">{`${info[0]} ${info[1]}`}</p></p><br />
        <p className="ml-[10%] self-center text-white flex">Teléfono: <p className="text-[#53AFEE] ml-[0.7vw]">{info[2]}</p></p><br />
        <p className="ml-[10%] self-center text-white flex">Edad: <p className="text-[#53AFEE] ml-[0.7vw]">{info[3]}</p></p><br />
        <p className="ml-[10%] self-center text-white flex">Dirección: <p className="text-[#53AFEE] ml-[0.7vw]">{info[4]}</p></p><br />
      </div>
      <img src={info[5]} alt="User" className="w-[75%] object-cover rounded-[50%] border-4 border-green-500 row-span-2 " />


    </div>
  )
}

export default Profile
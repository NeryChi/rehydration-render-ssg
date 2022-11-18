const Profile = ({user}) => {
  return(
    <div className="flex h-[100%]">
      <p className="ml-[10%] self-center text-white">{`Nombre: ${user[0].first} ${user[0].last}`}</p><br />
      <p className="ml-[10%] self-center text-white">{`Nombre: ${user[0].first} ${user[0].last}`}</p>
    </div>
  )
}

export default Profile
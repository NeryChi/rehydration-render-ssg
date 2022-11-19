const Profile = ({user}) => {
  return(
    <div className="flex h-[100%] grid grid-flow-row-4">
      <p className="ml-[10%] self-center text-white">{`Nombre:  ${user[0].first} ${user[0].last}`}</p>
      <p className="ml-[10%] self-center text-white">{`Edad:  ${user[2].age}`}</p>
    </div>
  )
}

export default Profile
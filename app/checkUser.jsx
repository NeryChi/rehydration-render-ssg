import Profile from "./profile";

let user = ''

const CheckUser = () => {

  if(typeof window === 'undefined'){
    return null;
  }

  function getUser(){
    fetch('https://randomuser.me/api/').then((res) => res.json()).then((data) => dataUser(data)).catch(err => console.log(err))
  }

  const dataUser = (data) => {
    user = [data.results[0].name, data.results[0].phone, data.results[0].dob, data.results[0].picture]
  }

  getUser()

  if(user){
    document.getElementById('check').className = 'bg-slate-900 opacity-[97%] hover:opacity-[97%] grid grid-cols-1 grid-rows-2 flex justify-center items-center duration-300 '
    return(
      <Profile user={user}/>
    )
  }

  return(
    <div>
      <img src="https://i.pinimg.com/236x/20/0e/a4/200ea4fb2afbdc53d7161c90a33a0947--animation.jpg" alt="oh" />
    </div>
  )
}

export default CheckUser
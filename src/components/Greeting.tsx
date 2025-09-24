import {useState,useEffect} from 'react';
import Button from "./Button";
import axios from 'axios';

type GreetingProps ={
  name: string;
  age: number;
}
type Address = {city?: string; pincode?: number}

type User = {
  name: string;
  age: number;
  email: string;
  address?: Address
}

type Users = User[]

const USERS: Users  = [{name: "giridhar",age: 32,email: "e@gmail.com",address: {}}]

const Greeting: React.FC<GreetingProps> = ({name,age}: {name: string,age:number}) => {
  const [username,setusername]  = useState("")
  const [users,setUsers]  = useState(USERS)

  useEffect(() => {
    fetchUsers()
  },[])

  const fetchUsers  = async ():Promise<void> => {
    try {
        // let originalUsers: Users = [...users]
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log("respsone is", response)
        setUsers((prevUsers) => {
          const updated = [...prevUsers, ...response.data];
          console.log("Updated users:", updated);
          return updated;
        })

      } catch (error) {
        console.log(error)
      }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)  => {
    const {value} = event.target
    setusername(value)
  }

  const handleClick  = (event: React.MouseEvent<HTMLButtonElement>)  => {
    console.log("Button clicked!")
    console.log(event.target)
  }
  return(
    <div>
      Hello , I am {name} and age is {age}
      <input type="text" name="username" value={username} onChange={handleChange} />

      <Button handleClick={handleClick} />
      <ul>
        {users.length && users.map(user => 
          <li>{user.name}</li>
        )}
      </ul>
    </div>
  )
}

export default Greeting;
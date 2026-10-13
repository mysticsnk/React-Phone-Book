import { useRef, useState } from "react";
import { User, type UserProps } from "./User";
import { type UserInfo } from "../Interfaces/UserInfo";
import UserForm from "./UserForm";
import type { UserInfoShort } from "../Interfaces/UserInfoShort";

export const UserList = () => {
    const [users, setUsers] = useState<UserInfo[]>([])
    const [foundUsers, setFoundUsers] = useState<UserInfo[]>([])
    const [searchedSurname, setSearchedSurname] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    let counter = useRef(0)

    const addUser = ({name, surname, email, phone}: UserInfoShort) => {
        setUsers([
            ...users,
            {id: counter.current, key: counter.current++, name, surname, email, phone}
        ])
    }

    const deleteUser = (id: number) => {
        setUsers(users.filter(phone => phone.id !== id))
    }

    const findUser = (surname: string) => {
        return users.filter(user => user.surname.toLowerCase().includes(surname.toLowerCase()))
    }

    return <div>
        <UserForm handleSubmit={addUser}/>
        <input type="text" placeholder="Search by surname" value={searchedSurname} onChange={(e) => setSearchedSurname(e.target.value)}/>
        <button type="submit" onClick={() => {
            if (!isSearching) {
                setFoundUsers(findUser(searchedSurname))
            }
            setIsSearching(!isSearching)
        }}>{isSearching ? "Stop Searching" : "Search"}</button>
        {isSearching ?
        foundUsers.map(user => <User 
            id={user.id}
            key={user.key} 
            name={user.name} 
            surname={user.surname} 
            email={user.email} 
            phone={user.phone}
            onDelete={deleteUser}
        />)
        : 
        users.map(user => <User 
            id={user.id}
            key={user.key} 
            name={user.name} 
            surname={user.surname} 
            email={user.email} 
            phone={user.phone}
            onDelete={deleteUser}
        />)}

    </div>
}
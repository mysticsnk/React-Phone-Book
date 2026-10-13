import { useRef, useState } from "react";
import { User, type UserProps } from "./User";
import { type UserInfo } from "../Interfaces/UserInfo";
import UserForm from "./UserForm";
import type { UserInfoShort } from "../Interfaces/UserInfoShort";

export const UserList = () => {
    const [users, setUsers] = useState<UserInfo[]>([])
    const [searchedUser, setSearchedUser] = useState<UserInfo>()
    const [searchedUserSurname, setSearchedUserSurname] = useState("")
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
        return users.filter(user => user.surname === surname)[0]
    }

    return <div>
        <UserForm handleSubmit={addUser}/>
        <input type="text" placeholder="Search by surname" value={searchedUserSurname} onChange={(e) => setSearchedUserSurname(e.target.value)}/>
        <button type="submit" onClick={() => {
            setIsSearching(!isSearching)
            if (isSearching) {
                setSearchedUser(findUser(searchedUserSurname))
            }
        }}>{isSearching ? "Stop Searching" : "Search"}</button>
        {isSearching ? <User name={sea}/> : <ul>
            {users.map(user => <User 
                id={user.id}
                key={user.key} 
                name={user.name} 
                surname={user.surname} 
                email={user.email} 
                phone={user.phone}
                onDelete={deleteUser}
            />)}
        </ul>}

    </div>
}
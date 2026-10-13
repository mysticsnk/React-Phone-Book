import { useState } from "react"
import type { UserInfo } from "../Interfaces/UserInfo"
import type { UserInfoShort } from "../Interfaces/UserInfoShort"

export interface UserFormProps {
    handleSubmit: (userData: UserInfoShort) => void
}

export const UserForm = ({handleSubmit} : UserFormProps) => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmitForm = () => {
        handleSubmit({
            name,
            surname,
            email,
            phone
        })
        setName("")
        setSurname("")
        setEmail("")
        setPhone("")
    }


    return <div>
        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>

        <button type="submit" onClick={handleSubmitForm}>Add</button>
    </div>
}

export default UserForm
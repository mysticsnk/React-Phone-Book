import { useState } from "react"

export interface UserProps {
    id: number
    key: number
    name: string,
    surname: string,
    email: string,
    phone: string
    onDelete: (id: number) => void
}

export const User = (props :UserProps) => {
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(props.name)
    const [surname, setSurname] = useState(props.surname)
    const [email, setEmail] = useState(props.email)
    const [phone, setPhone] = useState(props.phone)

    return <div id={props.id.toString()} key={props.key}>
        {isEditing ? <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/> : <p>{name}</p>}
        {isEditing ? <input type="text" placeholder="surname" value={surname} onChange={(e) => setSurname(e.target.value)}/> : <p>{surname}</p>}
        {isEditing ? <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/> : <p>{email}</p>}
        {isEditing ? <input type="text" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/> : <p>{phone}</p>}
        <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
}
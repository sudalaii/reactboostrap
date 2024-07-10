import { useEffect, useState } from "react";

function User() {
    const [users, setUsers] = useState(null)
    const deleteUser = (id) => {
        console.log(id)
        fetch("http://localhost:4000/user/delete/" + id, {
            method: "delete"
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
            })

    }
    useEffect(() => {
        fetch("http://localhost:4000/user/list")
            .then((res => res.json()))
            .then((data) => {
                setUsers(data)
                console.log(data)
            })
    }, [])
    return (
        <>
            hello

            {
                users &&
                <table border="3">
                    {
                        users.map((e) => {
                            return <tr>
                                <th>name</th>
                                <td>{e.username}</td>
                                <th>email</th>
                                <td>{e.email}</td>
                                <th>contact</th>
                                <td>{e.contact}</td>
                                <th>password</th>
                                <td>{e.password}</td>
                                <td>
                                    
                                    <input type="button" value="delete a User"
                                        onClick={(event) => { deleteUser(e._id) }} />
                                </td>
                            </tr>
                        })
                    }
                </table>
            }
        </>
    )
}
export default User;
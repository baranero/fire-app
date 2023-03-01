import { users } from '../data/users'

const UserItem = () => {
 return (
    <>
        {users.map((user) => (
            <p key={user.id}>{user.id}. {user.name} {user.function}</p>
        ))}
    </>
 )
}

export default UserItem
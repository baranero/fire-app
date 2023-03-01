import { users } from '../data/users'
import classes from './Users.module.scss'

const UserItem = () => {
 return (
    <div className={classes['users-container']}>
        {users.map((user) => (
            <ul className={classes['users-list']} key={user.id}>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.function}</li>
            </ul>
        ))}
    </div>
 )
}

export default UserItem
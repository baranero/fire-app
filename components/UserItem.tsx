import { Link, TableCell, TableRow } from "@mui/material"

export type UserProps = {
    id: string
    name: string
    function: string
  }
  
const UserItem: React.FC<{ user: UserProps }> = ({ user }) => {
    return (
        <TableRow component={Link} href={`/users/${user.id}`}>
            <TableCell component='div'>{user.id}</TableCell>
            <TableCell component='div'>{user.name}</TableCell>
            <TableCell component='div'>{user.function}</TableCell>
        </TableRow>
    )
}

export default UserItem
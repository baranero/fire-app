import { TableCell, TableRow } from "@mui/material"

export type UserProps = {
    id: string
    name: string
    function: string
}


const UserItem: React.FC<{ user: UserProps }> = ({ user }) => {
    return (
        <TableRow>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.function}</TableCell>
          </TableRow>
    )
}

export default UserItem
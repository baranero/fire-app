import { Link, TableCell, TableRow } from "@mui/material"

export type UserProps = {
    id: string
    name: string
    function: string
}


const UserItem: React.FC<{ user: UserProps }> = ({ user }) => {
    return (
                <>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.function}</TableCell>
                </>
    )
}

export default UserItem
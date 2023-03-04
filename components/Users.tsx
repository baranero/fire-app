import classes from '../styles/Users.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserItem, { UserProps } from './UserItem';
import Link from 'next/link';

type Props = {
  feed: UserProps[]
}  

const Users: React.FC<Props> = (props) => {
  return (
    <div className={classes['users-container']}>
      <TableContainer component={Paper} >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Imię i nazwisko</TableCell>
            <TableCell>Funkcja</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.feed.map((user) => (
            <TableRow component={Link} key={user.id} href={`/users/${user.id}`}>
                <UserItem  user={user}/>
              </TableRow>
          ))}
        </TableBody>
      </Table>
        </TableContainer>
  </div>
  )
}


// const UserItem = () => {
//  return (
//   <TableContainer component={Paper} className={classes['users-container']}>
//   <Table sx={{ minWidth: 650 }} aria-label="simple table">
//     <TableHead>
//       <TableRow>
//         <TableCell>ID</TableCell>
//         <TableCell>Imię i nazwisko</TableCell>
//         <TableCell>Funkcja</TableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {users.map((user) => (
//         <TableRow
//           key={user.id}
//           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//         >
//           <TableCell component="th" scope="row">
//             {user.id}
//           </TableCell>
//           <TableCell>{user.name}</TableCell>
//           <TableCell>{user.function}</TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// </TableContainer>
//  )
// }

export default Users


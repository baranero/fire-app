import classes from './Users.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserItem, { UserProps } from './UserItem';

type Props = {
  user: UserProps[]
}

const Users: React.FC<Props> = (props) => {
  return (
    <div className={classes['users-container']}>
      <TableContainer component={Paper} >
      <Table component='div' aria-label="simple table">
        <TableHead component='div'>
          <TableRow component='div'>
            <TableCell component='div'>ID</TableCell>
            <TableCell component='div'>Imię i nazwisko</TableCell>
            <TableCell component='div'>Funkcja</TableCell>
          </TableRow>
        </TableHead>
        <TableBody component='div'>
          {props.user.map((user) => (

                <UserItem key={user.id} user={user}/>

          ))}
        </TableBody>
      </Table>
        </TableContainer>
  </div>
  )
}
export default Users


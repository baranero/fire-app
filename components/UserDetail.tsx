import { PersonProps } from "@/pages/users/[id]";
import { Card, CardContent, Typography } from "@mui/material"
import Layout from "./Layout"

type Props = {
  person: PersonProps[]
}

const UserDetail: React.FC<{ person: PersonProps }> = ({ person }) => {
    
    return (
        <>
        <Layout>
          <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {person.id}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {person.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {person.function}
            </Typography>
          </CardContent>
                </Card>
        </Layout>
        </>
    )
}

export default UserDetail
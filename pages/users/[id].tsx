import { UserProps } from "@/components/UserItem"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

type Props = {
    feed: UserProps[]
  } 

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const UserDetail: React.FC<Props> = (props) => {

  const router = useRouter()

  router.query.users

    return (
        <Layout>
          <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              ABC
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              DEF
            </Typography>
          </CardContent>
                </Card>
        </Layout>
    )
}

export default UserDetail

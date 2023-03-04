import React from 'react';
import Layout from '@/components/Layout';
import classes from '../components/Layout.module.scss'

const Home: React.FC = () => {
  return (
    <Layout>
      <h2 className={classes.title}>Strona do zarządzania zmianą.</h2>
      <p className={classes.description}>Sprawdź swoje nadgodziny i urlopy.</p>
    </Layout>
  )
}


export default Home
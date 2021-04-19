import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data: {cases, deaths, suspects, datetime}}) => {
  if(!cases){
    return "Loading..."
  }
  return(
    <div className={styles.container}>
      <Grid container spacing ={3} justify='center'>
        {/*Active cases card*/}
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Infectados</Typography>
            <Typography variant='h5'>
              <CountUp 
                start={0}
                end={cases}
                duration={1}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>{new Date(datetime).toDateString()}</Typography>
            <Typography variant='body2'>Numero de casos de COVID-19</Typography>
          </CardContent>
        </Grid>
         {/*Suspects cases card*/}
         <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.suspects)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Suspeitas</Typography>
            <Typography variant='h5'>
              <CountUp 
                start={0}
                end={suspects}
                duration={2}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>{new Date(datetime).toDateString()}</Typography>
            <Typography variant='body2'>Numero de suspeitas de COVID-19</Typography>
          </CardContent>
        </Grid>
         {/*Deaths card*/}
         <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Mortes</Typography>
            <Typography variant='h5'>
              <CountUp 
                start={0}
                end={deaths}
                duration={2}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>{new Date(datetime).toDateString()}</Typography>
            <Typography variant='body2'>Numero de mortes por COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;
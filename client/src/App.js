import logo from './logo.svg';
import './App.css';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import mystery from './images/mystery.png'
import {Posts} from './components/Posts/Posts'
import {Form} from './components/Form/Form'
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {getPosts} from './actions/posts'
import {useState } from 'react'

function App() {
  const [currentId,setCurrentId] = useState(null)
  const classes = useStyles();
  const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getPosts())
},[currentId,dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit"> 
        <Typography className={classes.heading} variant="h2" align="center">Cryptids</Typography>
        <img className={classes.image} src={mystery} alt="mystery" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>

            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;

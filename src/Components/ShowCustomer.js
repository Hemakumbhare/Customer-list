import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { getCustomers } from '../Service/api';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import { deepOrange } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';



const useStyle = makeStyles((theme) => ({
  container: {
    width: '67%',
    margin: '0 0 0 67px',
    '& > *': {
      marginTop: '20'
    }
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    margin: "5% 0 0 20%",
    height: "170px",
    width: "200px"

  },
}));


const initialValue = {
  firstname: '',
  lastname: '',
  status: '',
  occupation: '',
  dob: '',
   bio: '',
  file: ''
}
const ShowCustomer = () => {
  const [customer, setCustomer] = useState(initialValue);

  const { firstname, lastname, status, occupation, dob, bio, file } = customer;
  const { id } = useParams();
  console.log(id);
  const classes = useStyle();

 

  useEffect(() => {
     async function loadCustomerData(){
      const response = await getCustomers(id);
      setCustomer(response.data)
      console.log('response', response);
    }
    loadCustomerData();
  },[]) 
  return (
    <Grid container>
      <Box
      mx="auto"
      boxShadow={3}
      bgcolor="background.paper"
      m={1}
      p={1}
      style={{ width: '30rem', height: '30rem', margin:'30px 0 0 350px'}}>
    <FormGroup className={classes.container}>
      <Container maxWidth="sm">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <img src="/avatar.png" alt="profile pic" style={{margin: '0 0 0 50px',height:'180px',width:'200px'}}/>

              
            </Grid>
            <Grid item xs={12} sm={6}>
              
                  <TextField id="outlined-basic" label="First Name" variant="outlined" name='firstname' readOnly={true} value={firstname} />
             
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" name='lastname' readOnly={true} value={lastname} />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField id="outlined-basic" label="Occupation" variant="outlined" name='occupation' readOnly={true} value={occupation} />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField id="outlined-basic" label="Date of Birth" variant="outlined" name='dob' readOnly={true} value={dob} />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField id="outlined-basic" label="Status" variant="outlined" name='status' readOnly={true} value={status} />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField id="outlined-basic" label="Bio" variant="outlined" name='bio' readOnly={true} value={bio} />
            </Grid>

          </Grid>
        </div>
      </Container>

    </FormGroup>
    </Box>
    </Grid>
  )
}

export default ShowCustomer;
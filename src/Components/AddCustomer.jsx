import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { addCustomer } from '../Service/api';
import { useHistory } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';



toast.configure()
const useStyle = makeStyles({
    container: {
        width: '300px',
        margin: '0 0 0 39px',
        padding: '46px 76px 48px 45px',
        shadow : '20px',
        '& > *': {
            marginTop: '20'
        }
    },
    formControl: {
        '& > *': {
            padding: '35px 0 0 14px'
        }
    },

})


const initialValue = {
    firstname: '',
    lastname: '',
    status: '',
    occupation: '',
    dob: '',
    position: '',
    bio: '',
    file:''
}

const AddCustomer = () => {
    const [customer, setCustomer] = useState(initialValue);
    const classes = useStyle();
    const history = useHistory();
 
    const onValueChange = (e) => {
        console.log(e.target.value);
        setCustomer({ ...customer, [e.target.name]: e.target.value })
        console.log(customer);
    }
    
    const onFileChange = (e) => {       
        //    setCustomer({ ...customer, [e.target.name] : [e.target.files[0]]}) 
            // console.log(customer);

    }
    
    const addCustomerDetails = async () => {
        
        console.log("customer",customer);
        await addCustomer(customer);
        toast('Record Added Successfully') 
        history.push('./')
    }
 


    var date = new Date();
        var cDate = ((date.getDate() + '/' + (date.getMonth()+1) + '/' + (date.getFullYear())));
        console.log(cDate);
        
    
   
    return (
        <Grid container>
            <Box
            mx="auto"
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '30rem', height: '35rem', margin:'30px 0 0 350px'}}>
        <FormGroup className={classes.container} > 
            <FormControl><b>FirstName</b>
                <Input  onChange={(e) => onValueChange(e)} name='firstname' />
            </FormControl>

            <FormControl><b>LastName</b>

                <Input onChange={(e) => onValueChange(e)} name='lastname' />
            </FormControl>


            <FormControl><b>Occupation</b>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    name="occupation"
                    onChange={(e) => onValueChange(e)}
                >
                    <MenuItem value="Employees">Employees</MenuItem>
                    <MenuItem value="Business">Business</MenuItem>
                    <MenuItem value="Student">Student</MenuItem>
                </Select>
            </FormControl>

            <FormControl><b>Date of Birth</b>
                <Input className={classes.formControl} type="date" onChange={(e) => onValueChange(e)} name='dob' id="dob"/>
            </FormControl>

            <FormControl><b>Status</b>
                <RadioGroup row aria-label="Status" onChange={(e) => onValueChange(e)} name="status" defaultValue="top" >
                    <FormControlLabel value="active" control={<Radio color="primary" />} label="Active" />
                    <FormControlLabel value="inactive" control={<Radio color="primary" />} label="InActive" />
                </RadioGroup>
            </FormControl>

            <FormControl><b>Bio</b>
                <textarea aria-label="empty textarea" style={{ height:'50px' }} placeholder="" onChange={(e) => onValueChange(e)} name='bio' />

            </FormControl>
            <FormControl><b>Profile Picture</b>
                <Input type="file" onChange={(e) => onFileChange(e)} name="file"/> 
            </FormControl>
  
            <Button type='submit' variant='contained' color='primary' onClick={() => addCustomerDetails()}>Add customer</Button>
            
        </FormGroup>
        </Box>
        </Grid>
    )
}

export default AddCustomer
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';

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
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { getCustomers } from "../Service/api";

import { useState, useEffect } from "react";
import {editCustomer } from '../Service/api';
import { useHistory, useParams } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



toast.configure()

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        
    }
})

const initialValue = {
    firstname: '',
    lastname: '',
    status: '',
    occupation: '',
    dob: '',
    bio: '',
    file: ''
}

const EditCustomer = () => {
    const [customer, setCustomer] = useState(initialValue);
    const [value, setValue] = React.useState('');
    const { firstname, lastname, status, occupation, dob, bio, file } = customer;

    const { id } = useParams();
    const classes = useStyle();
    const history = useHistory();

    useEffect(() => {
        async function loadCustomerData(){
            const response = await getCustomers(id);
            setCustomer(response.data)
            console.log('response', response);
          }
          loadCustomerData();
    },[]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const onValueChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value })
    }

    const editCustomerDetails = async () => {
        await editCustomer(id, customer);
        toast("customer Updated successfully!");
        history.push('/')
    }

    var date = new Date();
    console.log(date);
    console.log((date.getFullYear() + '/' + (date.getMonth()+1) + '/' + (date.getDate())));

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
        
            <FormControl>
                <InputLabel p={1}>FirstName </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='firstname' value={firstname} />
            </FormControl>
   

            <FormControl>
                <InputLabel>LastName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastname' value={lastname} />
            </FormControl>


            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Occupation</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    value={occupation}
                    onChange={(e) => handleChange(e)}
                     >

                    <MenuItem name='occupation' value={occupation}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Employees"} className="selected">Employees</MenuItem>
                    <MenuItem value={"Business"}>Business</MenuItem>
                    <MenuItem value={"Student"}>Student</MenuItem>
                </Select>
            </FormControl>

            <FormControl>
                <InputLabel>Date of Birth </InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name='dob' value={dob} />
            </FormControl>

            <FormControl>

                <RadioGroup row aria-label="status" name="status" defaultValue="top" value={status} >
                    <FormControlLabel value="active" control={<Radio color="primary" />} label="Active" />
                    <FormControlLabel value="inactive" control={<Radio color="primary" />} label="InActive" />

                </RadioGroup>
            </FormControl>

            <FormControl>
                <InputLabel >Bio</InputLabel>
                <TextareaAutosize aria-label="empty textarea" placeholder="" onChange={(e) => onValueChange(e)}
                    name='bio' value={bio} />

            </FormControl>

            <FormControl>
                <InputLabel >Profile Picture</InputLabel>
                <Input type='file' onChange={(e) => onValueChange(e)} name='file' value={file} />
            </FormControl>
            <br />
            <Button variant='contained' color='primary' onClick={() => editCustomerDetails()}>Edit customer</Button>
        </FormGroup>
        </Box>
        </Grid>
    )
}

export default EditCustomer
import { getCustomers, deleteCustomer } from "../Service/api";
import { useEffect, useState } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

import {makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 0 0 150px',
        border: "1px solid gray",
    },
    thead: {
        '& > *': {
            backgroundColor: 'lightgray',
            color: 'black',
            fontSize: '20px'
        }
    },
    row: {
        '& > *': {
            fontSize: '20px'
        }
    },
    action: {
        margin : "10px 0 0 10p"
    }
})
const initialState = { alt: "", src: "" };
const AllCustomer = () => {
    const [customer, setCustomer] = useState([]);
    const [{ alt, src }, setPreview] = useState(initialState);
    const classes = useStyle();

    useEffect(() => {
        getAllCustomers();
    }, [])

    const getAllCustomers = async () => {
        const response = await getCustomers();
        console.log(response.data);
        setCustomer(response.data);
    }


    const deleteCustomerData = async (id) => {
        await deleteCustomer(id);
        alert("Record deleted successfully!");
        getAllCustomers();
    }

      
const fileHandler = event => {
    const { files } = event.target;
    setPreview(
      files.length
        ? {
            src: URL.createObjectURL(files[0]),
            alt: files[0].name
          }
        : initialState
    );
  };


    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell >ID</TableCell>
                    <TableCell>FirstName</TableCell>
                    <TableCell>LastName</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Occupation</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    customer.map(customer => (
                        <TableRow key={`/id_${customer._id}`}>
                            <TableCell>{customer._id}</TableCell>
                            <TableCell>{customer.firstname}</TableCell>
                            <TableCell>{customer.lastname}</TableCell>
                            <TableCell>{customer.status}</TableCell>
                            <TableCell>{customer.occupation}</TableCell>
                            <TableCell>
                            <Link to={`/show/${customer._id}`}>  <VisibilityIcon title="Show Customer" style={{ cursor: "pointer", color:"green" ,margin: "0 28px 0 0" }} onChange={fileHandler} ></VisibilityIcon>
                            </Link> 
                               <Link to={`/edit/${customer._id}`}><EditIcon style={{ cursor: "pointer", color:"blue" ,margin: "0 28px 0 0"}}></EditIcon>
                               </Link> 
                               <DeleteRoundedIcon style={{ cursor: "pointer", color:"red",margin: "0 28px 0 0" }}  onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteCustomerData(customer._id) }}></DeleteRoundedIcon>
                            </TableCell>

                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
export default AllCustomer
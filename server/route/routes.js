import express, { request } from 'express'
import {getCustomer,addCustomer,getCustomerById,editCustomer,deleteCustomer} from '../controller/customer-controller.js'

const route = express.Router();

route.get('/',getCustomer);
route.post('/add',addCustomer);

route.get('/:id', getCustomerById);

route.put('/:id',editCustomer);

route.delete('/:id',deleteCustomer);




export default route;
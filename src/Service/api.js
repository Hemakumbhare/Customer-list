import axios from 'axios';

const customerurl = 'http://localhost:8000/customers';



export const getCustomers = async(id) =>{
    id= id || '';
    return await axios.get(`${customerurl}/${id}`);
}
export const addCustomer = async(customer) =>{
    return await axios.post(`${customerurl}/add`,customer);
}

export const editCustomer = async(id,customer)=>{
    return await axios.put(`${customerurl}/${id}`,customer)
}

export const deleteCustomer = async(id) =>{
    return await axios.delete(`${customerurl}/${id}`)
}


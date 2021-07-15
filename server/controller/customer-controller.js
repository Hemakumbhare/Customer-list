import Customer from "../model/customer-schema.js";
 
export const getCustomer = async (request,response)=>{
    try{
        let customer = await Customer.find();
        response.json(customer);
     }catch(error){
             response.json({message : error.message});
     }
}

export const addCustomer = async (request,response) =>{
    console.log(addCustomer);
    const customer = request.body;
    console.log("customer",customer);
    const newCustomer = new Customer(customer);
    try{
       await newCustomer.save();
       response.json(newCustomer);
    }catch(error){
            response.json({message : error.message});
    }

}

export const getCustomerById = async(request,response) =>{
    const id = request.params.id;
    try{
    const customer = await Customer.findById(id);
    response.json(customer);
    }catch(error){
            response.error({message: error.message});
    }
}

export const editCustomer = async (request,response) => {
    const customer = request.body;
    const editCustomer = new Customer(customer);

    try{    
            await Customer.updateOne({ _id: request.params.id},editCustomer);
            response.json(editCustomer);

    }catch(error){
        response.json({message : error.message})
    }
}

export const deleteCustomer = async(request,response)=>{
    try{
            await Customer.deleteOne({_id:request.params.id});
            response.json("Customer deleted Successfully");
           
    }catch(error){
        response.json({message: error.message});
    }
}

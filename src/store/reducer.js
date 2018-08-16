// import actionTypes from './action'
import axios from 'axios'


const initialState = {
    customers: [],
    // age:0
    coke:0,
    sprite:0,
    orders:[]
}

const reducer = (state=initialState, action) => {
    
    if(action.type === 'INCREMENT'){
        console.log("reducer")
        return {
            
            age: state.age + 1
        }
    }

    if(action.type === 'INCREMENT_COKE'){
        console.log("coke inc")

        var id = state.customers[action.index].id
        console.log(id)
        var x = "coke"

        const newOrder = {
            customerId:id,
            orderName:x
        }
        axios.post("https://orders-service-demo.cfapps.io/orders",newOrder)
        // return {
        //     coke: state.coke + 1
        // }
    }

    if(action.type === 'INCREMENT_SPRITE'){
        console.log("sprite inc")

        var id = state.customers[action.index].id
        console.log(id)

        var x = "sprite"

        const newOrder = {
            customerId:id,
            orderName:x
        }
        axios.post("https://orders-service-demo.cfapps.io/orders",newOrder)
        
    }

    if(action.type === 'ADD_CUSTOMER'){
        console.log(action.customerData.name)
        console.log("hey")

        const newCustomer = {
            name: action.customerData.name,
            addressLine1: action.customerData.addressLine1,
            addressLine2: action.customerData.addressLine2,
            postCode: action.customerData.postCode,
            age: action.customerData.age

        }

        console.log(newCustomer)
        // axios.post("https://localhost:8080/customer/add",this.newCustomer)
        // axios.post("https://customer-service-madhu.cfapps.io/customers",newCustomer)
        axios.post("https://customers-service-demo.cfapps.io/customers",newCustomer)
        
        // return {
        //     ...state,
        //     customers: state.customers.concat(newCustomer)
            
        // }
    }

    if(action.type === 'DELETE_CUSTOMER'){
        console.log("delete called")
        var id = state.customers[action.index].id 
        console.log(id)
        axios.delete("https://customers-service-demo.cfapps.io/customers/"+id)

        console.log(state.customers)
        state.customers.splice(action.index,1)
        console.log(state.customers)
    }

    if(action.type === 'UPDATE_CUSTOMER'){
        console.log("update called")
        var id = action.customerData.id

        const updateCustomer={
            id:action.customerData.id,
            name:action.customerData.name,
            addressLine1:action.customerData.addressLine1,
            addressLine2:action.customerData.addressLine2,
            postCode:action.customerData.postCode,
            age: action.customerData.age
        }

        console.log(updateCustomer)
        axios.post("https://customers-service-demo.cfapps.io/customers",updateCustomer)

        // state.id=action.customerData.id
        // state.name=action.customerData.name
        // state.addressLine1=action.customerData.addressLine1
        // state.addressLine2=action.customerData.addressLine2
        // state.postCode=action.customerData.postCode
        // state.age= action.customerData.age

        axios.get("https://customers-service-demo.cfapps.io/customers").then((res)=>{
        // axios.get("https://customer-service-madhu.cfapps.io/customers").then((res)=>{
            console.log(res.data)
            state.customers = res.data
            console.log(state.customers)

        })
    }

    if(action.type === 'GET_CUSTOMER'){

        console.log("DB data called")

        axios.get("https://customers-service-demo.cfapps.io/customers").then((res)=>{
        // axios.get("https://customer-service-madhu.cfapps.io/customers").then((res)=>{
            console.log(res.data)
            state.customers = res.data
            console.log(state.customers)

        })

        
    }
    console.log("zzzzzzzzzzzzz")
    return state;
};

export default reducer
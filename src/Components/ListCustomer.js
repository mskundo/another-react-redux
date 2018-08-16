import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import DisplaySingleCustomer from './DisplaySingleCustomer'
import axios from 'axios'

class ListCustomer extends React.Component{

    constructor(){
        super()
        this.state = {
            allCustomers:[]
        }
        this.getCustomers = this.getCustomers.bind(this)
      
    }
    

    // this method is used to call values from the database directly
    getCustomers(){             
        axios.get("https://customers-service-demo.cfapps.io/customers").then((res)=>{
        // axios.get("https://customer-service-madhu.cfapps.io/customers").then((res)=>{
            console.log(res.data)
            this.setState({allCustomers:res.data})
            console.log(this.state.allCustomers)
        })
        // axios.get("https://localhost:8080/customer/getAllCustomer").then((res)=>{
        //     console.log(res)
        // })
        
    }

    componentWillMount(){
        console.log("WillMount")
        console.log(this.props.cust)
        this.props.getCustomer()
        console.log(this.props.cust)
    }

    render(){
        
        

        return(
            <div>
                {/* Z
                <button type="submit" onClick={this.props.increment}>INC</button>
                <input type="text" value={this.props.ctr}/><br/>
                Z<br/> */}
                {/* <button type="submit" className="btn btn-primary" onClick={this.props.getCustomer}>REFRESH</button> */}
                
                {this.props.cust.map((customer,index) => (

                <DisplaySingleCustomer  id = {customer.id}
                                        name={customer.name}
                                        addressLine1={customer.addressLine1}
                                        addressLine2={customer.addressLine2}
                                        postCode = {customer.postCode}
                                        age = {customer.age}
                                        clickToDelete={()=>this.props.deleteCustomer(index)}
                                        clickToUpdate={()=>this.props.updateCustomer(index)}
                                        clickToCoke={()=>this.props.incrementCoke(index)}
                                        clickToSprite={()=>this.props.incrementSprite(index)}/>
                ))
                }
                
                
               
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("pppppppppppppppppppp")
    console.log(state.customers)


    return{
        // ctr : state.age,
        cust: state.customers,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type:'INCREMENT'}),
        deleteCustomer: (index) => dispatch({type:'DELETE_CUSTOMER', index:index}),
        getCustomer: () => dispatch({type:'GET_CUSTOMER'}),
        incrementCoke: (index) => dispatch({type:'INCREMENT_COKE',index:index}),
        incrementSprite: (index) => dispatch({type:'INCREMENT_SPRITE',index:index})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCustomer)




// componentWillMount(){
//     console.log("WillMount")
//     console.log(this.props.cust)
//     this.props.getCustomer()
// }
// componentDidMount(){
//     console.log("DidMount")
//     console.log(this.props.cust)
//     // this.props.getCustomer()
// }

// componentWillReceiveProps(){
//     console.log("WillReceiveProps")
//     console.log(this.props.cust)
// }
// componentWillUpdate(){
//     console.log("WillUpdate")
//     console.log(this.props.cust)
// }
// componentDidUpdate(){
//     console.log("DidUpdate")
//     console.log(this.props.cust)
// }
// componentWillUnmount(){
//     console.log("WillUnmount")
//     console.log(this.props.cust)
// }





// let rows = []
        // console.log(this.props.cust)
        //         rows= (this.props.cust === undefined) ? [] : this.props.cust.map((customer,index) => (

        //             <DisplaySingleCustomer  name={customer.name}
        //                                     addressLine1={customer.addressLine1}
        //                                     addressLine2={customer.addressLine2}
        //                                     postCode = {customer.postCode}
        //                                     age = {customer.age}
        //                                     clickToDelete={()=>this.props.deleteCustomer(index)}
        //                                     clickToUpdate={()=>this.props.updateCustomer(index)}/>
        //         ))


        // let myAllCustomers  =[]
        // myAllCustomers =  this.props.cust.map((customer,index) => (

        //                 <DisplaySingleCustomer  name={customer.name}
        //                                         addressLine1={customer.addressLine1}
        //                                         addressLine2={customer.addressLine2}
        //                                         postCode = {customer.postCode}
        //                                         age = {customer.age}
        //                                         clickToDelete={()=>this.props.deleteCustomer(index)}
        //                                         clickToUpdate={()=>this.props.updateCustomer(index)}/>
        //             ))

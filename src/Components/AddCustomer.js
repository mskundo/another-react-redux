import React from 'react'
// import ReactDOM from 'react-dom'
import './AddCustomer.css'
import { connect } from 'react-redux'
// import actionTypes from '../store/action'

class AddCustomer extends React.Component {
    
    componentWillMount(){
        // constructor(){
        // super()
        console.log("Constructor")
        this.state = {
            name: '',
            addressLine1: '',
            addressLine2: '',
            postCode: '',
            age:''
        }

        this.readName = this.readName.bind(this)
        this.readAddressLine1 = this.readAddressLine1.bind(this)
        this.readAddressLine2 = this.readAddressLine2.bind(this)
        this.readPostcode = this.readPostcode.bind(this)
        this.readAge = this.readAge.bind(this)
        this.addCustomer = this.addCustomer.bind(this)

    }

    
    readName(e) {
        console.log(e.target.value)
        // console.log(this.state)
        // this.setState({name: this.state.name = e.target.value})
        this.setState({name : e.target.value})
        // console.log(this.state.name)
        // console.log(this.state)

    }
    readAddressLine1(e) {
        console.log(e.target.value)
        this.setState({ addressLine1: e.target.value })
        // console.log(this.state.addressLine1)
        // console.log(this.state)

    }
    readAddressLine2(e) {
        console.log(e.target.value)
        this.setState({ addressLine2:e.target.value })
        // console.log(this.state.addressLine2)
        // console.log(this.state)

    }
    readPostcode(e) {
        console.log(e.target.value)
        this.setState({ postCode: e.target.value })
        // console.log(this.state.postCode)
        // console.log(this.state)

    }
    readAge(e) {
        console.log(e.target.value)
        this.setState({ age: e.target.value })
        // console.log(this.state.age)
        // console.log(this.state)
    }

    addCustomer(e) {

        console.log("adding customer")
        console.log(this.state)

    }

    render() {

        return (
            <div className="x">
                <form>

                    <div className="row ">
                        <div className="col-lg-2">
                            Name :
                        </div>
                        <div className="col-lg-2">
                            <input type="text" onChange={this.readName} value={this.state.name}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            Address Line 1:
                        </div>
                        <div className="col-lg-2">
                            <input type="text" onChange={this.readAddressLine1} value={this.state.addressLine1}/>
                        </div>
                        <div className="col-lg-2">
                            Address Line 2:
                        </div>
                        <div className="col-lg-2">
                            <input type="text" onChange={this.readAddressLine2} value={this.state.addressLine2}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-2">
                            Post Code:
                        </div>
                        <div className="col-lg-2">
                            <input type="text" onChange={this.readPostcode} value={this.state.postCode}/>
                        </div>
                        <div className="col-lg-2">
                            Age:
                        </div>
                        <div className="col-lg-2">
                            <input type="text" onChange={this.readAge} value={this.state.age}/>
                        </div>
                        <div className="col-lg-2">
                            <button className="btn btn-danger" 
                                    type="submit" 
                                    onClick={()=>this.props.addCustomerNext(this.state.name,
                                                                this.state.addressLine1,
                                                                this.state.addressLine2,
                                                                this.state.postCode,
                                                                this.state.age)}>ADD</button>
                                    {/* onClick={()=>this.props.addCustomerNext()}>ADD</button> */}
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // cust: state.customers
    }
}

const mapDispatchToProps = dispatch => {
    return {
       addCustomerNext:(name,addressLine1,addressLine2,postCode,age)=>dispatch({type:'ADD_CUSTOMER',
        customerData:{name:name,addressLine1:addressLine1,addressLine2:addressLine2,postCode:postCode,age:age}})
        // addCustomerNext: () => dispatch({type:'ADD_CUSTOMER'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer)
// export default AddCustomer


     
    // componentDidMount(){
    //     console.log("DidMount")
    // }
    // componentWillReceiveProps(){
    //     console.log("WillReceiveProps")
    // }
    // componentWillUpdate(){
    //     console.log("WillUpdate")
    // }
    // componentDidUpdate(){
    //     console.log("DidUpdate")
    // }
    // componentWillUnmount(){
    //     console.log("WillUnmount")
    // }
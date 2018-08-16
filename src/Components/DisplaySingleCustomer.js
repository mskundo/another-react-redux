import React from 'react'
import {connect} from 'react-redux'

class DisplaySingleCustomer extends React.Component{

    componentWillMount(){
        this.state={
            showUpdate : false,
            name: this.props.name,
            addressLine1: this.props.addressLine1,
            addressLine2: this.props.addressLine2,
            postCode: this.props.postCode,
            age:this.props.age
        }
        this.showUpdateDetails = this.showUpdateDetails.bind(this)
        this.readName = this.readName.bind(this)
        this.readAddressLine1 = this.readAddressLine1.bind(this)
        this.readAddressLine2 = this.readAddressLine2.bind(this)
        this.readPostcode = this.readPostcode.bind(this)
        this.readAge = this.readAge.bind(this)
        this.refresh = this.refresh.bind(this)
    }
    
    readName(e) {
        console.log(e.target.value)
        this.setState({name : this.state.name =e.target.value})
          
    }
    readAddressLine1(e) {
        console.log(e.target.value)
        this.setState({ addressLine1: this.state.addressLine1 = e.target.value })
    }
    readAddressLine2(e) {
        console.log(e.target.value)
        this.setState({ addressLine2: this.state.addressLine2 = e.target.value })
    }
    readPostcode(e) {
        console.log(e.target.value)
        this.setState({ postCode: this.state.postCode = e.target.value })
    }
    readAge(e) {
        console.log(e.target.value)
        this.setState({ age: this.state.age = e.target.value })
    }

    refresh(event){
        console.log("refresh");

        this.props.updateMyCustomer(this.props.id,
            this.state.name,
            this.state.addressLine1,
            this.state.addressLine2,
            this.state.postCode,
            this.state.age)

        this.showUpdateDetails()
    }

    showUpdateDetails=()=>{
        console.log("open update")
        const temp = this.state.showUpdate    
        this.setState({showUpdate: !temp})
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div class="col-lg-3">
                        <p>
                            <table>
                            <tr>
                                <td>{this.props.id}</td>
                                <td>{this.props.name}</td>
                                <td>{this.props.addressLine1}</td>
                                <td>{this.props.addressLine2}</td>
                                <td>{this.props.postCode}</td>
                                <td>{this.props.age}</td>

                            </tr>
                            </table>
                            {/* {this.props.id}--{this.props.name}, {this.props.addressLine1}, {this.props.addressLine2}, {this.props.postCode}, {this.props.age} */}
                        </p>
                    </div>
                    <div className="col-lg-1">
                        <button type="submit" className="btn btn-info" onClick={this.showUpdateDetails}>UPDATE</button>
                    </div>
                    <div className="col-lg-1">
                    <button type="submit" className="btn btn-danger" onClick={this.props.clickToDelete}>DELETE</button>
                    </div>

                    <div className="col-lg-1">
                    <button type="submit" className="btn btn-success" onClick={this.props.clickToCoke}>Coke</button>
                    </div>

                    <div className="col-lg-1">
                    <button type="submit" className="btn btn-success" onClick={this.props.clickToSprite}>Sprite</button>
                    </div>
                    

                    
                
                </div>
                

                { this.state.showUpdate === true ? 
                <div>
                    <div className="row">
                        <div className="col-lg-2">
                            Name:
                        </div>
                        <div className="col-lg-2">
                            <input type="text" onChange={this.readName} value={this.state.name} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">Address Line 1:</div>
                        <div className="col-lg-2"><input type="text" onChange={this.readAddressLine1} value={this.state.addressLine1}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">Address Line 2:</div>
                        <div className="col-lg-2"><input type="text" onChange={this.readAddressLine2} value={this.state.addressLine2}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">Post Code:</div>
                        <div className="col-lg-2"><input type="text" onChange={this.readPostcode} value={this.state.postCode}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">Age :</div>
                        <div className="col-lg-2"><input type="text" onChange={this.readAge} value={this.state.age}/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <button type="submit" 
                                    className="btn btn-primary" 
                                    onClick={this.refresh}>Save</button>
                        </div>
                    </div>
             
                </div>:null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // cust: state.customers
    }
}

const mapDispatchToProps =  dispatch => {
    return {
        updateMyCustomer:(id,name,addressLine1,addressLine2,postCode,age)=>dispatch({type:'UPDATE_CUSTOMER',
        customerData:{id:id,name:name,addressLine1:addressLine1,addressLine2:addressLine2,postCode:postCode,age:age}})
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySingleCustomer)
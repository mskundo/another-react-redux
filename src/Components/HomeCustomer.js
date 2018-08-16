import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, NavLink, Route} from 'react-router-dom'
import AddCustomer from './AddCustomer'
import ListCustomer from './ListCustomer'
import WelcomeCustomer from './WelcomeCustomer'
import './HomeCustomer.css'
import {connect} from 'react-redux'

class HomeCustomer extends React.Component{

    componentWillMount(){
        this.props.getCustomer()
    }

    render(){
        return(
             <HashRouter>
                <div>
                   
                    <div>
                        <ul className="remove-bullet">
                            <li className="li-spacing"><NavLink exact to="/Welcome">Home</NavLink></li>
                            <li className="li-spacing"><NavLink to="/AddCustomer">Add Customer</NavLink></li>
                            <li className="li-spacing"><NavLink to="/ListCustomer">List Customer</NavLink></li>
                        </ul>
                    </div>
                    
                    <div>
                        <Route exact path="/Welcome" component={WelcomeCustomer}></Route>
                        <Route exact path="/AddCustomer" component={AddCustomer}></Route>
                        <Route exact path="/ListCustomer" component={ListCustomer}></Route>
                    </div>

                    
                </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = state => {
    return{
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCustomer: () => dispatch({type:'GET_CUSTOMER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeCustomer)
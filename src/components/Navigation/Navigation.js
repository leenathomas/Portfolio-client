import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// To show the active link on the navbar NavLink function component is used
const NavLink = (props) => {
    const pageURI = window.location.pathname+window.location.search;
    const classNameForAnchor = (props.path === pageURI) ? "nav-link active" : "nav-link";
    return(
        <li className="nav-item">
            <a className={classNameForAnchor} href={props.path}>{props.name}</a> 
        </li>
    );
}
class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            menu : false
        };
        //if not using the below toggleMenu fucntion as a arrow fucntion, it has to be binded as in line 22 to enable us to use the this.state and this.props
        //this.toggleMenu=this.toggleMenu.bind(this);
    }
    //To toggle the hamburger button and list of navbar links in smaller screens, this function is called on click
    toggleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    render(){
        const show = (this.state.menu) ? "show" : "";
        return(
            <nav className="navbar navbar-expand-md sticky-top navbar-custom">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Leena Thomas</a>
                    <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse "+ show } id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <NavLink path="/" name="Home"/>
                            <NavLink path="/myProjects" name="Personal Projects"/>
                            <NavLink path="/photography" name="Photography"/>
                            <NavLink path="/blogs" name="Contact Me"/>
                            
                        </ul>
                    </div>
                </div>
            </nav>
       );
    }
}

export default Navigation;
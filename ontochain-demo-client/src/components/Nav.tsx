import React from "react";
import {Link} from 'react-router-dom';
import ProtectedResource, {ProtectedResourceProps} from "../pages/ProtectedResource";
import "../css/bootstrap.css"

export interface NavProps extends ProtectedResourceProps {
  signInOutButtons: JSX.Element
}

export default class Nav extends ProtectedResource<NavProps> {

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginRight: "auto"}}>
          <Link className="navbar-left" to="/">
            <img src="rhizomik.svg"
                 className="pull-left"
                 style={{maxWidth: "40px"}}
            />
            <img src="copyrightly.svg"
                 className="pull-left"
                 style={{maxHeight: "40px", marginRight: "20px"}}
            />
          </Link>
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              {this.authorShip()}
              <li className="nav-item">
                <a className="nav-link dropdown-toggle" href="#">Reuse</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CLY Token</a>
              </li>
            </ul>
          </div>
          {this.props.signInOutButtons}
        </nav>
    );
  }

  private authorShip() {
    if (this.isAuthenticated()) {
      return <>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#"
          >Authorship</a
          >
        </li>
      </>;
    } else {
      return null
    }
  }

}
import "./App.css"
import React, {Component} from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Button from "react-bootstrap/Button"
import AuthenticationModal from "./components/AuthenticationModal"
import {AuthResponse} from "@gimly-blockchain/copyrightly-onto-demo-shared-types"
import jsonpack from "jsonpack"
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import AuthorShip from "./pages/AuthorShip";


export type AppState = {
    showAuthenticationModal?: boolean
    authResponse?: AuthResponse
}


class App extends Component<AppState> {

    state: AppState = {}
    private readonly _stateStorageKey = "state-onto-app";

    constructor(props: AppState, context: any) {
        super(props, context);
        this.initState();
    }

    render() {
        this.saveState();
        const authResponse = this.state.authResponse as AuthResponse;
        return (
            <div>
                <Router>
                    <Nav authResponse={authResponse} signInOutButtons={this.signInOutButtons()}/>
                    <Switch>
                        <Route path="/authorship">
                            <AuthorShip authResponse={authResponse}/>
                        </Route>
                        <Route path="/"><Landing/></Route>
                    </Switch>
                    <AuthenticationModal show={this.state.showAuthenticationModal as boolean}
                                         onCloseClicked={this.hideLoginDialog}
                                         onSignInComplete={this.completeSignIn}/>
                </Router>
            </div>
        )
    }

    private showLoginDialog = () => {
        this.setState({showAuthenticationModal: true})
    }

    private hideLoginDialog = () => {
        this.setState({showAuthenticationModal: false})
    }

    private completeSignIn = (authResponse: AuthResponse) => {
        this.setState({showAuthenticationModal: false, authResponse: authResponse})
    }

    private signOut = () => {
        this.setState({authResponse: undefined})
    };

    private initState() {
        let storedState = sessionStorage.getItem(this._stateStorageKey)
        if (storedState != null) {
            this.loadState(storedState);
        } else {
            this.setState({showAuthenticationModal: false})
        }
    }

    private loadState = (storedState: string) => {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state = jsonpack.unpack(storedState) as AppState
    };


    private saveState = () => {
        sessionStorage.setItem(this._stateStorageKey, jsonpack.pack(this.state))
    };

    private signInOutButtons = () => {
        const authResponse = this.state.authResponse
        if (authResponse) {
            return (
                <img src="signout.svg" style={{marginLeft: "auto", cursor: "pointer"}} onClick={this.signOut}/>
            )
        } else {
            return (
                <img src="gimlyid.svg" style={{marginLeft: "auto", cursor: "pointer"}} onClick={this.showLoginDialog}/>
            )
        }
    };
}

export default App

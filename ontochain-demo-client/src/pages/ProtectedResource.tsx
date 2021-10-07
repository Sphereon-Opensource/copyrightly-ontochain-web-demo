import {AuthResponse} from "@spostma/ontochain-demo-shared-types"
import React, {Component} from "react"
import {isBlank} from "underscore.string"

export interface ProtectedResourceProps {
    authResponse: AuthResponse
}

export default class ProtectedResource<T extends ProtectedResourceProps> extends Component<T, {}> {

    protected isAuthenticated(): boolean {
        return this.props.authResponse && !isBlank(this.props.authResponse.userDID)
    }

    protected getAuthResponse() {
      return this.props.authResponse
    }

    protected accessDenied() {
        return (
            <div className="App">
                <img src="access-denied.jpg" alt="logo" width="50%"/>
            </div>
        )
    }
}
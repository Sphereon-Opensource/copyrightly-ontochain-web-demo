export declare class QRVariables {
    redirectUrl?: string;
    requestorDID?: string;
}
export declare class StateMapping {
    redirectUrl?: string;
    stateId?: string;
    requestorDID?: string;
    sessionId?: string;
    pollCount?: number;
    authRequestCreated: boolean;
    authResponse?: AuthResponse;
}
export declare class AuthResponse {
    constructor(userDID: string, userName: string);
    userDID: string;
    userName: string;
    token?: string;
}
//# sourceMappingURL=auth-model.d.ts.map
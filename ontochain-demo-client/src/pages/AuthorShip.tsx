import React from "react"
import ProtectedResource, {ProtectedResourceProps} from "./ProtectedResource";
import {Container} from "react-bootstrap";
import {AuthResponse} from "@gimly-blockchain/copyrightly-onto-demo-shared-types";
import ProofModal from "../components/ProofModal";
import ShowCredentialModal from "../components/ShowCredentialModal";


export interface AuthorShipState {
    showOwnerCredentialModal?: boolean
    showProofCredentialModal?: boolean
}

export default class AuthorShip extends ProtectedResource<ProtectedResourceProps, AuthorShipState> {

    state: AuthorShipState = {showOwnerCredentialModal: false, showProofCredentialModal: false}

    render() {
        if (this.isAuthenticated()) {
            return (
                <Container className="mt-5">
                    <div className="row">
                        <h3 className="col">Manifestation</h3>
                        <div className="col-1">
                            <button className="btn-sm btn-outline-dark fa-pull-right">
                                <i className="fas fa-sync-alt fa-lg"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card mb-1">
                        <div className="card-block row m-1">
                            <h5 className="card-title col-md-12 p-1">
                                Snow Again in Mollerussa
                            </h5>
                            <div className="col-md-6 p-1 mb-1">
                                <h6

                                    className="card-subtitle text-muted"
                                >
                                    Hash
                                </h6>
                                <a

                                    target="_blank"
                                    className="card-text"
                                    href="https://ipfs.infura.io/ipfs/QmPP8X2rWc2uanbnKpxfzEAAuHPuThQRtxpoY8CYVJxDj8"
                                >QmPP8X2rWc2uanbnKpxfzEAAuHPuThQRtxpoY8CYVJxDj8</a
                                >
                            </div>
                            <div className="col-md-2 p-1 mb-1">
                                <h6

                                    className="card-subtitle text-muted"
                                >
                                    Creator
                                </h6>
                                <a

                                    className="card-text"
                                    title="0xfd9c5fc8fcecf69041749fb34778e0b00c4a70f5"
                                    href="/creators/0xfd9c5fc8fcecf69041749fb34778e0b00c4a70f5"
                                >
                                    0xfd9c...70f5 </a
                                >
                            </div>
                            <div className="col-md-3 p-1 mb-1">
                                <h6

                                    className="card-subtitle text-muted"
                                >
                                    Registered
                                </h6>
                                <a

                                    target="_blank"
                                    className="card-text"
                                    href="https://rinkeby.etherscan.io/tx/0x4b6516b38334b95348255cdad13b38f23559d7ad129c5880b5594c3db631db95"
                                >
                                    Sep 20, 2021, 10:34:37 PM</a
                                >
                            </div>
                            <div className="col-md-1 p-1 mb-1">
                                <h6

                                    className="card-subtitle text-muted"
                                >
                                    Evidence
                                </h6>
                                <p className="card-text">1</p>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="form-group row m-1">
                                <div

                                    className="input-group input-group-sm"
                                >
                                    <input

                                        id="inputStaked"
                                        name="inputStaked"
                                        type="number"
                                        className="
									form-control
									ng-untouched ng-pristine ng-valid
								"
                                    />
                                    <div

                                        className="input-group-append"
                                    >
								<span

                                    className="input-group-text"
                                ><span

                                    className="fas fa-copyright logo-icon"
                                ></span
                                >LY Staked</span
                                >
                                    </div>
                                    <button

                                        type="button"
                                        className="btn btn-sm btn-success ml-2"
                                    >
                                        Add
                                    </button
                                    >
                                    <button

                                        type="button"
                                        className="btn btn-sm btn-danger ml-2"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-secondary mb-4">
                        Back
                    </button>
                    <h3>Authorship Evidence</h3>
                    <div _ngcontent-psj-c50="" className="card mb-4">
                        <div _ngcontent-psj-c50="" className="card-block row m-1">
                            <h5 _ngcontent-psj-c50="" className="card-title col-md-12 p-1">
                                YouTube Evidence 1
                            </h5>
                            <div _ngcontent-psj-c50="" className="col-md-6 p-1 mb-1">
                                <h6
                                    _ngcontent-psj-c50=""
                                    className="card-subtitle text-muted"
                                >
                                    YouTube Video
                                </h6>
                                <a
                                    _ngcontent-psj-c50=""
                                    target="_blank"
                                    className="card-text"
                                    href="https://www.youtube.com/watch?v=ZwVNLDIJKVA"
                                >
                                    ZwVNLDIJKVA</a
                                >
                            </div>
                            <div _ngcontent-psj-c50="" className="col-md-2 p-1 mb-1">
                                <h6
                                    _ngcontent-psj-c50=""
                                    className="card-subtitle text-muted"
                                >
                                    By
                                </h6>
                                <a
                                    _ngcontent-psj-c50=""
                                    className="card-text"
                                    title="0xfd9c5fc8fcecf69041749fb34778e0b00c4a70f5"
                                    href="/creators/0xfd9c5fc8fcecf69041749fb34778e0b00c4a70f5"
                                >
                                    0xfd9c...70f5
                                </a>
                            </div>
                            <div _ngcontent-psj-c50="" className="col-md-4 p-1 mb-1">
                                <h6
                                    _ngcontent-psj-c50=""
                                    className="card-subtitle text-muted"
                                >
                                    When
                                </h6>
                                <a
                                    _ngcontent-psj-c50=""
                                    target="_blank"
                                    className="card-text"
                                    href="https://rinkeby.etherscan.io/tx/0x90f2d96d6781a84ebb1c3d2cc8c6874c39a60a3055d35f9651035faec52136a6"
                                >
                                    Sept 20, 2021, 08:47:37 PM</a
                                >
                            </div>
                            <div _ngcontent-psj-c50="" className="col-md-6 p-1 mb-1">
                                <h6
                                    _ngcontent-psj-c50=""
                                    className="card-subtitle text-muted"
                                >
                                    For Manifestation
                                </h6>
                                <a
                                    _ngcontent-psj-c50=""
                                    className="card-text"
                                    href="/manifestations/QmPP8X2rWc2uanbnKpxfzEAAuHPuThQRtxpoY8CYVJxDj8"
                                >
                                    QmPP8X2rWc2uanbnKpxfzEAAuHPuThQRtxpoY8CYVJxDj8</a
                                >
                            </div>

                            <div _ngcontent-psj-c50="" className="col-md-6 p-1 mb-1">
                                <button
                                    type="button"
                                    className="btn btn-info m-2"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                    onClick={(id) => this.showProofCredentialModal(this)}
                                >
                                    Show Proof
                                </button>
                                <ProofModal authResponse={this.getAuthResponse()} show={this.state.showProofCredentialModal}
                                                     onCloseClicked={() => this.hideProofCredentialModal(this)}/>
                            </div>

                            <div className="col-md-6 p-1 mb-1">
                            </div>
                        </div>
                    </div>
                    <h3>Reuse Licenses NFTs</h3>
                    <button

                        type="button"
                        className="btn btn-info m-2"
                    >
                        Mint NFT
                    </button>
                    <div className="card mb-1">
                        <div className="card-block row m-1">
                            <h5

                                className="card-title col-md-12 p-1 text-truncate"
                            >
                                NFT
                                <small

                                    title="113479679619295910140335846375323731361040831589761032417304728995918910958060"
                                >113479679619295910140335846375323731361040831589761032417304728995918910958060</small
                                >
                            </h5>
                            <div className="col-md-9 p-1 mb-1">
                                <h6

                                    className="card-subtitle text-muted"
                                >
                                    Metadata
                                </h6>
                                <a

                                    target="_blank"
                                    className="card-text"
                                    href="https://ipfs.infura.io/ipfs/QmXiobeKEQjMsKD2wQ2n32q2KPusbBA4vLeJsP5nEFrQtT"
                                >
                                    ipfs://QmXiobeKEQjMsKD2wQ2n32q2KPusbBA4vLeJsP5nEFrQtT</a
                                >
                            </div>
                            <div className="col-md-3 p-1 mb-1">
                                <h6

                                    className="card-subtitle text-muted"
                                >
                                    Registered
                                </h6>
                                <a

                                    target="_blank"
                                    className="card-text"
                                    href="https://rinkeby.etherscan.io/tx/"
                                >
                                    Sep 29, 2021, 2:28:53 PM</a
                                >
                            </div>
                        </div>
                    </div>
                    <h3 _ngcontent-psj-c51="" className="mt-4">
                        Show Channel Owner from authentication
                    </h3>
                    <button
                        type="button"
                        className="btn btn-info m-2"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={(id) => this.showOwnerCredentialModal(this)}
                    >
                        Show Owner
                    </button>
                    <ShowCredentialModal authResponse={this.getAuthResponse()} show={this.state.showOwnerCredentialModal}
                                      onCloseClicked={() => this.hideOwnerCredentialModal(this)}/>
                </Container>
            )
        } else {
            return this.accessDenied();
        }
    }

    private showOwnerCredentialModal(thiz: any) {
        thiz.setState({showOwnerCredentialModal: true})
    }

    private hideOwnerCredentialModal(thiz: any) {
        thiz.setState({showOwnerCredentialModal: false})
    }

    private showProofCredentialModal(thiz: any) {
        thiz.setState({showProofCredentialModal: true})
    }

    private hideProofCredentialModal(thiz: any) {
        thiz.setState({showProofCredentialModal: false})
    }
}

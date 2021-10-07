import {Button, Col, Container, Image, Modal, Row} from "react-bootstrap"
import {Component} from "react"
import {AuthResponse} from "@spostma/ontochain-demo-shared-types"

export type CredentialsModalProps = {
    show?: boolean
    onCloseClicked?: () => void
    authResponse: AuthResponse
}


export default class CredentialsModal extends Component<CredentialsModalProps> {

    private readonly scanText = "Please scan this QR code now in your authenticator app.";
    private readonly authText = "Please approve the authentication request in your app.";

    constructor(props: CredentialsModalProps) {
        super(props)
    }

    render() {
        const authResponse = this.props.authResponse;
        return <Modal show={this.props.show} animation={false}>
            <Modal.Header style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Modal.Title>YouTube credentials</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Image src="Youtube.png"/>
                            <h6>Details of the YouTube channel owner</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center" style={{paddingTop: "10px"}}>
                            <table>
                                <tr>
                                    <td>Channel Name</td>
                                    <td><a href={authResponse.youtubeChannelURL} target="_blank">{authResponse.youtubeChannelName}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Channel ID</td>
                                    <td>{authResponse.youtubeChannelId}</td>
                                </tr>
                                <tr>
                                    <td>Channel Creation Date</td>
                                    <td>{authResponse.youtubeChannelCreationDate}</td>
                                </tr>
                                <tr>
                                    <td>Owner First Name</td>
                                    <td>{authResponse.firstName}</td>
                                </tr>
                                <tr>
                                    <td>Owner Last Name</td>
                                    <td>{authResponse.lastName}</td>
                                </tr>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    }

    private handleClose = () => {
        this.props.onCloseClicked?.()
    }
}

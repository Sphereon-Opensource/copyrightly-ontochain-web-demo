import {Button, Col, Container, Image, Modal, Row} from "react-bootstrap"
import {Component} from "react"
import {AuthResponse} from "@gimly-blockchain/copyrightly-onto-demo-shared-types"
import QRCode from "react-qr-code";

export type CredentialsModalProps = {
    show?: boolean
    onCloseClicked?: () => void
    authResponse: AuthResponse
}


export default class ProofModal extends Component<CredentialsModalProps> {

    private readonly scanText = "Please scan this QR code now in your app.";
    private readonly authText = "Please approve the authentication request in your app.";

    constructor(props: CredentialsModalProps) {
        super(props)
    }

    render() {
        const credentialMock = JSON.stringify({
            "@context": ["https://sphereon-opensource.github.io/vc-contexts/gimly/youtube/youtube-video-ownership.jsonld"],
            issuanceDate: '2021-09-20T20:47:37.270Z',
            issuer: 'did:ethr:0xfd9c5fc8fcecf69041749fb34778e0b00c4a70f5',
            subject: {
                title: 'Copyright claim',
                name: 'Reuse license for ‘Snow Again in Mollerussa’',
                description:
                    'Grants the owner permission to use the associated content under the specified conditions',
                externalLink:
                    'https://copyrightly.rhizomik.net/manifestations/QmPP8X2rWc2uanbnKpxfzEAAuHPuThQRtxpoY8CYVJxDj8',
                image: 'https://ipfs.io/ipfs/QmPP8X2rWc2uanbnKpxfzEAAuHPuThQRtxpoY8CYVJxDj8',
                issuerName: 'CopyrightLY',
                makeAvailableFrom: '2021-09-29T14:28:53.270Z',
                makeAvailableTo: '2022-09-28T13:52:25.270Z'
            }
        })

        const authResponse = this.props.authResponse;
        return <Modal show={this.props.show} animation={false}>
            <Modal.Header style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Modal.Title>Authorship Evidence</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Image src="Youtube.png"/>
                            <h6>Authorship Evidence Credential</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center" style={{paddingTop: "10px"}}>
                            <QRCode value={credentialMock} />
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

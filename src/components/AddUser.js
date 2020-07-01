import React, { Component } from "react";
import { ChatList } from "react-chat-elements";
import FormControl from "react-bootstrap/lib/FormControl";
import FormGroup from "react-bootstrap/lib/FormGroup";
import Modal from "react-bootstrap/lib/Modal";
import InputGroup from "react-bootstrap/lib/InputGroup";
import Button from "react-bootstrap/lib/Button";
import  UserList  from '../components/UserList';
/**
 *
 * Renders user list
 *
 * Used on both places Sign-in modal and as ChatList
 */

export default class AddUser extends Component {

    state = {
        openModal: this.props.openModal
    };


    componentWillReceiveProps(nextprops) {
        this.setState({ openModal: nextprops.openModal });
    }

    render() {
        return (
            <Modal show={this.state.openModal} >
                <Modal.Header>
                    <Modal.Title>Login as </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <FormGroup>
                        <InputGroup>
                            <FormControl
                                type="text"
                                value={this.state.messageText}
                                onChange={this.onMessageInputChange.bind(this)}
                                onKeyPress={this.onMessageKeyPress.bind(this)}
                                placeholder="UserNick Name"
                                ref="messageTextBox"
                                className="messageTextBox"
                                maxLength="3000"
                                autoFocus
                            />
                            <InputGroup.Button>
                                <Button
                                    disabled={!this.state.messageText}
                                    className="sendButton"
                                    onClick={this.onSendClicked.bind(this)}
                                >
                                    Add
                  </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                    <UserList
                        userData={this.props.users}
                        onUserClicked={this.props.onUserClicked}
                        showSignInList
                    />
                </Modal.Body>

            </Modal>
        );
    }


    /**
   *
   * Sends a message only if it is not falsy.
   */
    onSendClicked() {
        if (!this.state.messageText) {
            return;
        }
        this.props.addUser(this.state.messageText);
        this.props.onClose();
        this.setState({ messageText: "" });
    }
    onMessageInputChange(e) {
        this.setState({ messageText: e.target.value });
    }
    /**
     *
     * @param {KeyboardEvent} e
     *
     * listen for enter pressed and sends the message.
     */
    onMessageKeyPress(e) {
        if (e.key === "Enter") {
            this.onSendClicked();
        }
    }

}

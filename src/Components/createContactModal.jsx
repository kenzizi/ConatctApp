import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


class CreateContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
           <input type="text" className="modal-inputs" name="name"  placeholder="Type name" onChange={e=>this.props.handleInputs(e)}  />
           <input type="text" className="modal-inputs" name="lastname" placeholder="Type lastname" onChange={e=>this.props.handleInputs(e)} />
           <input type="text" className="modal-inputs" name="email" placeholder="Type email" onChange={e=>this.props.handleInputs(e)} />

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.addContact}>ADD contact</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CreateContact;
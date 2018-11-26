import React from 'react';
import Modal from 'react-native-modal';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Text } from 'react-native-elements';
import { style, styles } from './Modal.styles';

export class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: this.props.isVisible,
    };
  }

  toggleModal = () => this.setState({ isVisible: !this.state.isVisible });

  render() {
    return (
      <Modal
        backdropOpacity={0.3}
        style={[styles.containerStyle, this.props.containerStyle]}
        {...this.props}
        isVisible={this.state.isVisible}
      >
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <View style={[styles.viewContainer, this.props.viewContainer]}>
            {this.props.children}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

import React from 'react';
import Modal from 'react-native-modal';
import {
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import { style, styles } from './Modal.styles';

export class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: this.props.isVisible,
    };
  }

  handleClose = () => {
    console.log('Hello');
  };

  render() {
    const {
      containerStyle,
      viewContainer,
      children,
      middle,
      noOpacity,
      toggleModal,
    } = this.props;
    return (
      <TouchableHighlight>
        <View>
          <Modal
            backdropOpacity={noOpacity ? 0 : 0.3}
            style={[
              styles.containerStyle,
              containerStyle,
              middle
                ? { justifyContent: 'center' }
                : { justifyContent: 'flex-end' },
            ]}
            onBackdropPress={() => this.toggleModal}
            {...this.props}
          >
            <View style={[styles.viewContainer, viewContainer]}>
              {children}
            </View>
          </Modal>
        </View>
      </TouchableHighlight>
    );
  }
}

CustomModal.propTypes = {
  toggleModal: PropTypes.func,
  noOpacity: PropTypes.bool,
  middle: PropTypes.bool,
};

import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

const TouchablePlatformSpecific =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

export default TouchablePlatformSpecific;

import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

export const TouchablePlatformSpecific =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, Header, colors } from 'react-native-elements';
import { withTheme } from 'react-native-elements';

class ThemePreview extends React.Component {
  constructor(props) {
    super(props);
    const { colors, updateTheme } = props.theme;
  }
  render() {
    return (
      <ScrollView>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Text h2>Palette</Text>

        <View style={styles.container}>
          <View style={[styles.block, { backgroundColor: colors.primary }]} />
          <View style={[styles.block, { backgroundColor: colors.secondary }]} />
          <View style={[styles.block, { backgroundColor: colors.error }]} />
          <View style={[styles.block, { backgroundColor: colors.grey0 }]} />
          <View style={[styles.block, { backgroundColor: colors.grey1 }]} />
          <View style={[styles.block, { backgroundColor: colors.grey2 }]} />
          <View style={[styles.block, { backgroundColor: colors.grey3 }]} />
          <View style={[styles.block, { backgroundColor: colors.grey4 }]} />
          <View style={[styles.block, { backgroundColor: colors.grey5 }]} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignContent: 'center',
  },
  block: {
    width: 100,
    height: 100,
  },
});

export default withTheme(ThemePreview);

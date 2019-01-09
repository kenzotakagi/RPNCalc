import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';

const STATUSBAR_HEAIGHT = Platform.OS == 'ios' ? 20 : StatusBar.currentHeight;

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>

        <View style={ styles.results }>
          <View style={ styles.resultLine }>
          </View>
          <View style={ styles.resultLine }>
          </View>
          <View style={ styles.resultLine }>
          </View>
        </View>

        <View style={styles.buttons}>
          <View style={styles.buttonLine}>
          </View>
          <View style={styles.buttonLine}>
          </View>
          <View style={styles.buttonLine}>
          </View>
          <View style={styles.lastButtonLinesContainer}>
            <View style={styles.twoButtonLines}>
              <View style={styles.buttonLine}>
              </View>
              <View style={styles.buttonLine}>
              </View>
            </View>
            <View style={styles.enterButtonContainer}>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEAIGHT,
  },

  results: {
    flex: 3,
    backgroundColor: '#fff'
  },
  resultLine: {
    flex: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  buttons: {
    flex: 5,
  },
  buttonLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1,
  },

  lastButtonLinesContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  twoButtonLines: {
    flex: 3,
  },
  enterButtonContainer: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
  },
});
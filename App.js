import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const STATUSBAR_HEAIGHT = Platform.OS == 'ios' ? 20 : StatusBar.currentHeight;

const CalcButton = (props) => {
  const flex = props.flex ? props.flex : 1
  return (
    <TouchableOpacity
      style={ [styles.calcButton, { flex: flex }] }
      onPress={ () => { props.btnEvent() } }>
      <Text style={ styles.calcButtonText }>{ props.label }</Text>
    </TouchableOpacity>
  )
}

export default class App extends React.Component {
  valueButton = (value) => {
  }

  enterButton = () => {
  }

  calcButton = (value) => {
  }

  acButton = () => {
  }

  cButton = () => {
  }

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

        <View style={ styles.buttons }>
          <View style={ styles.buttonLine }>
            <CalcButton flex={ 2 } label={ 'AC' } btnEvent={ () => this.acButton() } />
            <CalcButton label={ 'C' } btnEvent={ () => this.cButton() } />
            <CalcButton label={ '+' } btnEvent={ () => this.calcButton('+') } />
          </View>

          <View style={ styles.buttonLine }>
          </View>
          <View style={ styles.buttonLine }>
          </View>
          <View style={ styles.lastButtonLinesContainer }>
            <View style={ styles.twoButtonLines }>
              <View style={ styles.buttonLine }>
              </View>
              <View style={ styles.buttonLine }>
              </View>
            </View>
            <View style={ styles.enterButtonContainer }>
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
  calcButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: "#b0c4de",
  },
  calcButtonText: {
    fontSize: 20,
  },
});
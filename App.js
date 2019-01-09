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

const CalcButtons = (props) => {
  return (
    <React.Fragment>
      { props.buttons.map(button => {
        return (
          <CalcButton
            key={ button.label }
            flex={ button.flex }
            label={ button.label }
            btnEvent={ button.btnEvent }
          />
        )
      }) }
    </React.Fragment>
  )
}

export default class App extends React.Component {
  buttons = [
    [
      {
        label: 'AC',
        flex: 2,
        btnEvent: () => { this.acButton() },
      },
      {
        label: 'C',
        btnEvent: () => { this.cButton() },
      },
      {
        label: '+',
        btnEvent: () => { this.calcButton('+') },
      },
    ],
    [
      {
        label: '7',
        btnEvent: () => { this.valueButton('7') },
      },
      {
        label: '8',
        btnEvent: () => { this.valueButton('8') },
      },
      {
        label: '9',
        btnEvent: () => { this.valueButton('9') },
      },
      {
        label: '-',
        btnEvent: () => { this.calcButton('-') },
      },
    ],
    [
      {
        label: '4',
        btnEvent: () => { this.valueButton('4') },
      },
      {
        label: '5',
        btnEvent: () => { this.valueButton('5') },
      },
      {
        label: '6',
        btnEvent: () => { this.valueButton('6') },
      },
      {
        label: '*',
        btnEvent: () => { this.calcButton('*') },
      },
    ],
    [
      {
        label: '1',
        btnEvent: () => { this.valueButton('1') },
      },
      {
        label: '2',
        btnEvent: () => { this.valueButton('2') },
      },
      {
        label: '3',
        btnEvent: () => { this.valueButton('3') },
      },
    ],
    [
      {
        label: '0',
        btnEvent: () => { this.valueButton('0') },
      },
      {
        label: '.',
        btnEvent: () => { this.valueButton('.') },
      },
      {
        label: '/',
        btnEvent: () => { this.calcButton('/') },
      },
    ],
    [
      {
        label: 'Enter',
        btnEvent: () => { this.enterButton() },
      },
    ]
  ]

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
            <CalcButtons buttons={ this.buttons[0] } />
          </View>
          <View style={ styles.buttonLine }>
            <CalcButtons buttons={ this.buttons[1] } />
          </View>
          <View style={ styles.buttonLine }>
            <CalcButtons buttons={ this.buttons[2] } />
          </View>

          <View style={ styles.lastButtonLinesContainer }>
            <View style={ styles.twoButtonLines }>
              <View style={ styles.buttonLine }>
                <CalcButtons buttons={ this.buttons[3] } />
              </View>
              <View style={ styles.buttonLine }>
                <CalcButtons buttons={ this.buttons[4] } />
              </View>
            </View>

            <View style={ styles.enterButtonContainer }>
              <CalcButtons buttons={ this.buttons[5] } />
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
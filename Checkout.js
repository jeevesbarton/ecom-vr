import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton, TextInput} from 'react-360';
import {connect} from './Store';


// class UselessTextInput extends React.Component {
//   render() {
//     return (
//       <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//       />
//     );
//   }
// }


const Checkout = props => {
  return (
    <View style={[styles.wrapper, {display: props.show}]}>
      <Text>Checkout Panel</Text>
      <View onInput={e => {
        const event = e.nativeEvent; // Extract the value from the runtime
        // event contains the actual event payload, as well as information on
        // which cursor the user was using, and which React tag was targeted
        const inputEvent = event.inputEvent; // Extract the payload
        // inputEvent.button is the raw button index, used to determine what was pressed
        // inputEvent.buttonClass is a field added to some buttons for common actions,
        //   like 'confirm', 'back', 'up', 'down', etc.
        // inputEvent.action is 'up', 'down', or 'repeat'
        // inputEvent.source identifies the button device, such as keyboard, mouse, etc
      }}>
        { /* ... */ }
      </View>      
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 600,
    height: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderColor: '#303050',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

const ConnectedCheckout = connect(Checkout);
export default ConnectedCheckout;

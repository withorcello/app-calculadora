import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import WLButton from './components/WLButton';


export default function App() {
  const [display, setDisplay] = useState('');

  function click(value) {
    setDisplay(display + ' ' + value)
  }

  function execute() {
    const calculo = display.replace(/\s+/g, '')
    setDisplay(eval(calculo))
  }

  function clear() {
    setDisplay('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.display}>
          {display}
        </Text>
        <View style={styles.buttons}>
          <WLButton title="C" click={clear} />
          <WLButton title="%" click={click} />
          <WLButton title="" click={() => {}} />
          <WLButton title="+" click={click} />
        </View>
        <View style={styles.buttons}>
          <WLButton title="7" click={click} />
          <WLButton title="8" click={click} />
          <WLButton title="9" click={click} />
          <WLButton title="-" click={click} />
        </View>
        <View style={styles.buttons}>
          <WLButton title="4" click={click} />
          <WLButton title="5" click={click} />
          <WLButton title="6" click={click} />
          <WLButton title="*" click={click} />
        </View>
        <View style={styles.buttons}>
          <WLButton title="1" click={click} />
          <WLButton title="2" click={click} />
          <WLButton title="3" click={click} />
          <WLButton title="/" click={click} />
        </View>
        <View style={styles.buttons}>
          <WLButton title="0" click={click} />
          <WLButton title="" click={() => {}} />
          <WLButton title="." click={click} />
          <WLButton title="=" click={execute} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  display: {
    fontSize: '18px',
    fontWeight: 'bold',
    height: '40px',
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingRight: '4px'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

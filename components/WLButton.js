import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WLButton(props) {
  return (
    <TouchableOpacity onPress={() => props.click(props.title)}>
      <Text style={styles.button}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fb933c',
    borderRadius: '8px',
    fontSize: '18px',
    margin: '2px'
  }
});

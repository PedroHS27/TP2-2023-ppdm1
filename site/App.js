import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Runner</Text>
      <View>
      <TouchableHighlight style={styles.TouchableHighlight}>
        <Text style={styles.Touchabletext}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.TouchableHighlight}>
        <Text style={styles.Touchabletext}>Cadastro</Text>
      </TouchableHighlight>
      </View>

    <Image source={require('/home/aluno/Documentos/TP2-2023/site/Untitled.jpg')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3B3B3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:100,
    color: '#9747FF',
    fontFamily: 'times new roman'
  },
  TouchableHighlight:{
    height:50,
    width:150,
    backgroundColor: '#9747FF',
    marginTop:30,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Touchabletext:{
    fontFamily: "times new roman",
    color: 'white',
    fontSize: 19
  }
});

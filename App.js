import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/param/Navigation';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store} style={styles.container}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    backgroundColor:'white'
  }
   
});

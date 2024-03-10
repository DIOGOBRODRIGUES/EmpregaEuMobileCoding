import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Home from './src/telas/Home';

export default function App() {
  return (
    // SafeAreaView impede de invadir a area de status 
    <SafeAreaView>
      <Home></Home>
      {/* usado para controlar barra de status do disposito, está setada como padrao aqui */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}



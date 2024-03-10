import {StyleSheet, Text, View, Image} from 'react-native';
import logo from '../../../../assets/estudante.jpg';

const Topo  = function(){
    return (
        <View style ={estilos.topo}>
            <View style ={estilos.logoContainer}>
                <Image source={logo} style={estilos.image}></Image>
                <Text style={estilos.tituloApp}>EmpregaEu</Text>
            </View>
            <Text style ={estilos.boasVindas}>Olá Diogo</Text>
            <Text style = {estilos.legendas}>Encontre as melhores Vagas</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
   topo:{
    backgroundColor:'#F6F6F6',
    padding:16,
   },
   image:{
    width:30,
    height:30,
   },
   boasVindas:{
    marginTop:24,
    fontSize:26,
    lineHeight:42,
    fontWeight:'bold',
    
   },
   legendas:{
    fontSize:16,
    lineHeight:42,
   },
   logoContainer:{
    flexDirection:'row',
    alignItems:'center',
   },
   tituloApp:{
    fontSize:20,
    fontWeight:'bold'
   }

})
export default Topo;
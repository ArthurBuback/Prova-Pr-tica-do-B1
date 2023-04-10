import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Projeto from './src/components/Projeto';

export default function App() {

  const itens = [
    {
      nome: 'Espada',
      descricao: 'Uma espada utilizada por guerreiros comuns do Império. +5 para ataques corpo a corpo.',
      imgUrl: "https://p.turbosquid.com/ts-thumb/P8/kT0AXg/oe/sig/jpg/1664459785/600x600/fit_q87/51c7d1864b501e18459dc43b494c1a8d51d1c5a1/sig.jpg"
    },
    {
      nome: 'Escudo',
      descricao: 'Um simples escudo utilizado para duelos em pé. +3 de defesa.',
      imgUrl: "https://i.pinimg.com/736x/37/07/31/370731d46935c761e59acc2cf56b7a00--tattoo-ideas.jpg"
    },
    {
      nome: 'Arco Longo',
      descricao: 'Uma arma criada tanto para patrulheiros quanto para atiradores de elite. +5 para ataques à distância.',
      imgUrl: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/S/aplus-media-library-service-media/71bbb71c-b0de-4d2c-bdff-173084f96e87.__CR0,0,1600,1600_PT0_SX300_V1___.jpg"
    },
  ]

  return (
    <View style={styles.container}>
      {itens.map(f => <Projeto item={f}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
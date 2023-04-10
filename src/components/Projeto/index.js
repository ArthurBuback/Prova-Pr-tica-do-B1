import { Button, Image, Text, View } from "react-native";

import styles from './styles';

export default function Projeto(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={{
                    uri: props.item.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.nome}>Título: {props.item.nome}</Text>
                <Text style={styles.descricao}>Descrição: {props.item.descricao}</Text>
                <Button style={styles.btn} title="Propor Troca?" color={'#606060'}/>
            </View>
        </View>
    );
}
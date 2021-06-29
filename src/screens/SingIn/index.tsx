import React from "react";
import { Image, Text, View, StatusBar } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";

export function SingIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image source={IllustrationImg} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`} e organize {`\n`} suas jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}

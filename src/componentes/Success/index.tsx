import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import successImg from '../../assets/success.png'; // da error por conta de tipagem. Crie uma pasta dentro de src com o @types declarando e entendendo todo arquivo com o final png
import { Copyright } from '../Copyright';
import { styles } from './styles';

interface Props {
  onSendAnotherFeedback: () => void; // tipagem para enviar outro feedback
};

export function Success({onSendAnotherFeedback}: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={successImg}
        style={styles.image}
      />

      <Text style={styles.title}>
        Agradecemos o seu feedback!!
      </Text>

      <TouchableOpacity
        onPress={onSendAnotherFeedback}
        style={styles.button}>
        <Text
          style={styles.buttonTitle}
        >
          Quero enviar outro
        </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
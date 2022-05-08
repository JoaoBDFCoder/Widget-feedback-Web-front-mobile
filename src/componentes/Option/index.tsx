import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text
 } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps { // estende toda as propriedades do ToychableOpacity
  title: string; // define o tipo do titulo
  image: ImageProps; // define o tipo da imagem
}

export function Option({title, image, ...rest} : Props) { // desestrutura os tipos(Props) e todo o restante das propriedades que é um TouchableOpacity
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest} // passando como spread operator pegando qualquer outra propriedade que seja passada pra esse componente que não esta extraida de forma explicita. Forma utilizada para não ter que tipar todo tipo de propriedade.
      >
        <Image
          source={image}
          style={styles.image}
        />
        <Text 
          style={styles.text}
        >
          {title}
        </Text>
    </TouchableOpacity>
  );
}
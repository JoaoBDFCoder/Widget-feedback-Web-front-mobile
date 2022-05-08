import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator // é o spiner que fica fazendo efeito de Loading
} from 'react-native';
import { theme } from '../../theme';

interface Props extends TouchableOpacityProps {
  isLoading: boolean; // para saber se o screenshot está carregando. Gerando o efeito de carregamento
}

import { styles } from './styles';

export function Button( { isLoading, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >

      {
        isLoading
        ?
        <ActivityIndicator
          color={theme.colors.text_on_brand_color}
        /> // se o loading estiver ativo, ativa o snipet de loading
        : // caso ao contrario vai ter um texto enviar feeedback
        <Text style={styles.title}> 
          Enviar feedback
        </Text>
      }
    </TouchableOpacity>
  );
}
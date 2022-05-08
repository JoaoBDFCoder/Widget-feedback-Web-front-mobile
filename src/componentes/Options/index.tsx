import React from 'react';
import { View, Text } from 'react-native';
import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { styles } from './styles';
import { FeedbackType } from '../Widget';

interface Props { // função que recebe a tyypagem do FeedbackType sendo o BUG, IDEA, OTHER que o retorno é void(vazio) não retorna nada
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe seu feedback
      </Text>

      <View style={styles.options}>
        {
          Object.entries(feedbackTypes) // para percorrer todas as entradas do objeto feedbacktypes
          .map(([key, value]) => (
            <Option
              key={key} // pegando dentro da chave Ex: BUG os values como title e image
              title={value.title}
              image={value.image}
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)} // fazendo a conversão da chave que está em string e convertendo em um tipo de dado. (Tipagem TypeScript)
            />
          ))
        }
      </View>

      <Copyright />
    </View>
  );
}
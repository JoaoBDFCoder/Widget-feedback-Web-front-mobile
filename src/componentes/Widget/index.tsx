import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ChatTeardropDots } from 'phosphor-react-native'
import { theme } from '../../theme';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Options } from '../Options';
import { Form } from '../Form';
import { Success } from '../Success';
import { feedbackTypes } from '../../utils/feedbackTypes';

export type FeedbackType = keyof typeof feedbackTypes;
// fazendo a tipagem do conteudo de feedback para usar de forma dinâmica na chamada das informações
// fazendo que ele seja definido apartir das chaves com o (keyof), pegando os tipos da chave (typeof) da função onde estão as informações
// podendo assim importar essa tipagem em qualquer lugar quer queira usar

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null); // estado pegando o tipo de feedback. ou é FeedbackType ou nullo (começando como nulo pq a pessoa ainda não digitou nada)
  const [feedbackSent, setFeedbackSent] = useState(false) // Estado pegando se o feedback foi enviado. começando como falso pq ainda não foi.

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeddback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOpen}
      >
        <ChatTeardropDots // balão widget
          size={34}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet // barra móvel
        ref={bottomSheetRef}
        snapPoints={[1, 280]} // altura e largura do barra móvel
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {
          feedbackSent ?
            <Success
              onSendAnotherFeedback={handleRestartFeddback} /> // se o feedback for verdadeiro, renderiza a página de sucess
            : // caso contrário ou renderiza o formulário ou o de options
            <>
              {
                feedbackType ? // se tem o tipo de feedback significa que a pessoa já selecionou um tipo de feedback, sendo assim levando para o forms
                  <Form
                    feedbackType={feedbackType}
                    onFeedbackCanceled={handleRestartFeddback} // função para voltar para as opções de feedback
                    onFeedbackSent={handleFeedbackSent} // função para enviar o feedback
                  />
                  : // caso vai estar nas opções de feedbacks
                  <Options
                    onFeedbackTypeChanged={setFeedbackType}
                  />
              }
            </>
        }
      </BottomSheet>

    </>
  );
}

export default gestureHandlerRootHOC(Widget);
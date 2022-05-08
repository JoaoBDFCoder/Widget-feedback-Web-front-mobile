import React, { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';

import { styles } from './styles';
import { FeedbackType } from '../Widget' // importação de tipagem das informações usuais
import { feedbackTypes } from '../../utils/feedbackTypes' // importação da lista com as informações
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';
import { api } from '../libs/api';
import { theme } from '../../theme';

interface Props { // para definição de propriedades(props) do componente de formulário 
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void; // para saber se ele foi cancelado
  onFeedbackSent: () => void; // para saber se ele foi enviado
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: Props) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const [comment, setComment] = useState("");

  const feedbackTypeInfo = feedbackTypes[feedbackType] // lista com a tipagem selecionada

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
    .then(uri => setScreenshot(uri)) // através do then podemos obter a uri da imagem armazenando no screenshot
    .catch(error => console.log(error)) // caso algo dê errado retorna o erro no console.
  }

  function handleScreenshotRemove() { // função para excluir a screenshot
    setScreenshot(null);
  }

  async function handleSendFeedback() { // função que vai fazer o envio do feedback para o back end
    if(isSendingFeedback) { // se o isSendingFeedback for verdadeiro vai estar enviando o feedback.
      return;
    }

    setIsSendingFeedback(true); // se for falso vai habilitar o efeito de loading
    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' });

    try { // vai fazer a requisição para enviar as informações de feedback para o backEnd (utilizando o axios)
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment,
      });

      onFeedbackSent();

    } catch (error) {
      console.log(error);
      setIsSendingFeedback(false); // caso algo de errado setar o setIsSendingFeedback como false para desativar o loading
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onFeedbackCanceled}
        >
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image
            source={feedbackTypeInfo.image}
            style={styles.image}
          />
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo"
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false} // para não corrigir a escrita automaticamente
        onChangeText={setComment}
      />
      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={handleScreenshot} // função da liby para capturar a tela
          onRemoveShot={handleScreenshotRemove} // função para retirar a screenshot
          screenshot={screenshot}
          /* screenshot="https://github.com/JoaoBDFCoder.png" */ // para pegar screenshot do github
        />
        <Button // de forma dinâmica
          onPress={handleSendFeedback}
          isLoading={isSendingFeedback}
        />
      </View>
    </View>
  );
}
// TextInput componente do react-native para digitar text (igual o form do React)
// Nesse caso o TouchableOpacity entra para fazer o botão de voltar - importando  o icone da biblioteca phosphor do react native

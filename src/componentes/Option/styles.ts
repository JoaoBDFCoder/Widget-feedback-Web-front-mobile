import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 104, // largura
    height: 112, //altura
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8, // espaçamento interno de todos os lados
    borderRadius: 8, // cantos arredondados
    marginHorizontal: 8, // espaço entre os itens na horizontal
    backgroundColor: theme.colors.surface_secondary,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 14,
    marginTop: 8, // espaço dos itens da parte de cima da aba
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
});
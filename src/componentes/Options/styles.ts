import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  options: {
    width: '100%', // como 100% tem um caracter %, colocamos entre aspas
    marginBottom: 48,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 32,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary
  },
  color: {
    color: 'white',
    fontSize: 20,
  },
});
import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 16,
    bottom: getBottomSpace() + 16 // faz o recuo da barra inferior do iphone e mais um espaço de 16
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
  },
  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 56,
    padding: 0
  },
});
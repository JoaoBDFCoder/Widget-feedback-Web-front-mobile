import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
  return (
    // criar condição dentro de TouchableOpacity de que quando não tiver uma screenshot tirada, aparecer uma camerazinha
    // e quando tiver uma screenshot, aparecer a screenshot com uma lixeirinha
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot} // igual ao onClick() - condição: SE existir uma screenshot ela vai querer remover com o onRemoveShot. SE NÃO ela vai quere tirar o print da tela.
      >
        {
          screenshot
            ? //Se existir uma screenshot vai aparecer uma lixeira junto da screenshot
            <View>
              <Image 
                style={styles.image}
                source={{ uri: screenshot }}
              />
              <Trash
                size={22}
                color={theme.colors.text_secondary}
                weight="fill"
                style={styles.removeIcon}
                />
            </View>
            :
            <Camera
              size={22}
              color={theme.colors.text_secondary}
              weight="bold"
            />
        }

    </TouchableOpacity>
  );
}
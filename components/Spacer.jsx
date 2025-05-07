import { View } from 'react-native';
import { ThemedView } from './Theme';

export const Spacer = ({ width = "100%", height = 40 }) => {
  return (
    <ThemedView style={{ width, height }} />
  )
}




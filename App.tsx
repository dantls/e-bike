import React from 'react';
import { NativeBaseProvider, Box } from "native-base";
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box
        flex="1"
        backgroundColor={theme.colors.primary[100]}     
      >
      </Box>
    </NativeBaseProvider>
  );
}


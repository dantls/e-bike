import { NativeBaseProvider } from "native-base";
import { theme } from './src/styles/theme';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Home />
    </NativeBaseProvider>
  );
}


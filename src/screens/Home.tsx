import { Box } from 'native-base';
import { DetailBackground } from '../atomic/atoms/DetailBackground';
import { MainBanner } from '../atomic/molecules/MainBanner';
import { theme } from '../styles/theme';

export function Home(){
  return(
    <Box
      flex="1"
      backgroundColor={theme.colors.primary[100]} 
      padding="20px"
      paddingTop="-10px"    
      position="relative"
    >
      <DetailBackground />
      <MainBanner />
    </Box>
  )
}
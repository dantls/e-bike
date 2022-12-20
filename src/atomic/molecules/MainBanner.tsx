import { Box, Image} from 'native-base';
import { ImageBackground } from 'react-native';

import slider from '../../img/slider.png';
import bike from '../../img/bike.png';

export function MainBanner(){
  return(
    <Box 
      width="100%"
      height="300"
      marginTop="-25px"
    >
      <ImageBackground
        source={slider}
        style={{
          flex:1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        resizeMode="contain"
      >
        <Image
          source={bike}
          alt="image of a bike"
        />
      </ImageBackground>
    </Box>
  )
}
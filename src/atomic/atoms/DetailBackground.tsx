import { Image } from 'native-base';
import detail from '../../img/detail.png';
export function DetailBackground(){
  return(
    <Image 
      source={detail} 
      alt="detail of home"
      position="absolute"
      top="140"
      right="0"
      bottom="0"
    />
  )
}
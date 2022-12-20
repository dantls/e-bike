import { Box, FlatList } from 'native-base';
import { useEffect, useState } from 'react';
import { DetailBackground } from '../atomic/atoms/DetailBackground';
import { Card } from '../atomic/molecules/Card';
import { Header } from '../atomic/molecules/Header';
import { MainBanner } from '../atomic/molecules/MainBanner';
import api from '../service/api';
import { theme } from '../styles/theme';

export interface CardProps {
   id: string;
   image: string;
   model: string;
   title: string; 
   price: number;
}

export function Home(){

  const [equipments, setEquipments] = useState<CardProps[]>([]);

  async function getEquipments(){
    try {
      const response = await api.get('/equipments');
      setEquipments(response.data)
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(()=>{
    getEquipments();
  },[])

  return(
    <Box
      flex="1"
      backgroundColor={theme.colors.primary[100]} 
      padding="20px"
      paddingTop="-10px"    
      position="relative"
    >
      <DetailBackground />

      <FlatList
        ListHeaderComponent={
          () => <>
            <Header text="Choose Your Bike"/>
            <MainBanner />
          </>
        }
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={equipments}
        renderItem={({item:equipment})=> (          
          <Card
            id={equipment.id}
            image={equipment.image}
            model={equipment.model}
            price={equipment.price}
            title={equipment.title}
          />
        )}
      />
    </Box>
  )
}
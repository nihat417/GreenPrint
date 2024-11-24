import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import { StyledText, StyledView,StyledImage,StyledButton, Testsvg } from '../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  return (
    <StyledView>

        <StyledView  style={{marginHorizontal:screenWidth/5,marginTop:50}} className='relative mx-[25px]'>
          <StyledImage source={require("../../../assets/images/withaicard.png")}/>
          <StyledButton className='absolute bottom-4 left-4 w-[100px] p-[10px] bg-[#fff] rounded-[20px]'>
            <StyledText className='text-center'>Calculate</StyledText>
          </StyledButton>
        </StyledView>

        <StyledView  style={{marginHorizontal:screenWidth/5,marginVertical:20}} className='relative mx-[25px]'>
          <StyledImage source={require("../../../assets/images/carbonemitcard.png")}/>
          <StyledButton onPress={()=>navigation.navigate("CalculatePage")} className='absolute bottom-4 left-4 w-[100px] p-[10px] bg-[#fff] rounded-[20px]'>
            <StyledText className='text-center'>Calculate</StyledText>
          </StyledButton>
        </StyledView>


    </StyledView>
  )
}

export default Home;
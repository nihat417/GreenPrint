import React from 'react';
import { StyleSheet,Dimensions  } from 'react-native';
import { StyledButton, StyledImage, StyledInput, StyledText, StyledView, Vector1Svg, Vector2Svg, Vector3Svg } from '../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;

    return (
      <StyledView>
          <StyledView style={styles.container}>
              <Vector1Svg style={styles.vector1} />
          </StyledView>
  
          <StyledView style={styles.container}>
              <Vector2Svg style={styles.vector2} />
          </StyledView>

          <StyledView style={styles.container}>
              <Vector3Svg style={styles.vector3} />
          </StyledView>
  
        <StyledView className='self-center  min-w-[300px]' style={{marginHorizontal:screenWidth/5,marginVertical:screenWidth/2}}>
          <StyledText className="text-center mb-[20px] text-[20px] text-black font-black">Register</StyledText>
  
          {/* styledinput */}
          <StyledInput className='rounded-[20px] p-[20px] mb-[20px] bg-[#D8D8D8]' placeholder='Name' placeholderTextColor="#000"/>
          <StyledInput className='rounded-[20px] p-[20px] mb-[20px] bg-[#D8D8D8]' placeholder='Surname' placeholderTextColor="#000"/>
          <StyledInput className='rounded-[20px] p-[20px] mb-[20px] bg-[#D8D8D8]' placeholder='Mail' placeholderTextColor="#000"/>
          <StyledInput className='rounded-[20px] p-[20px] mb-[20px] bg-[#D8D8D8]' placeholder='Password' placeholderTextColor="#000"/>
  
          <StyledButton className='p-[20px] bg-[#0F853B] rounded-[20px]'>
              <StyledText className='text-white text-center'>Sign Up</StyledText>
          </StyledButton>        
  
          <StyledButton className='mt-[20px]' onPress={()=>navigation.navigate("LoginPage")}>
            <StyledText className='text-[#898989] text-[20px] text-center'>Login</StyledText>
          </StyledButton>
  
        </StyledView>
      </StyledView>
    );
  };

export default Register;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative', 
    },
    vector1: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '50%', 
      height: '50%', 
    },
    vector2: {
      position: 'absolute',
      top: 150,
      right: 0,
      width: '50%', 
      height: '50%',
    },
    vector3: {
      position: 'absolute',
      top: 250,
      left: 0,
      width: '50%', 
      height: '50%',
    },
    
  });
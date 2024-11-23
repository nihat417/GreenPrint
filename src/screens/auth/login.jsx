import React,{useState} from 'react';
import { StyleSheet,Dimensions  } from 'react-native';
import { StyledButton,EyeOffSvg,EyeOnSvg ,StyledImage, StyledInput, StyledText, StyledView, Vector1Svg, Vector2Svg } from '../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;

    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(prevState => !prevState);
    };

  return (
    <StyledView>
        <StyledView style={styles.container}>
            <Vector1Svg style={styles.vector1} />
        </StyledView>

        <StyledView style={styles.container}>
            <Vector2Svg style={styles.vector2} />
        </StyledView>

      <StyledView className='self-center  min-w-[300px]' style={{marginHorizontal:screenWidth/5,marginVertical:screenWidth/2}}>
        <StyledText className="text-center mb-[20px] text-[20px] text-black font-black">Login</StyledText>

        {/* styledinput */}
        <StyledInput className='rounded-[20px] p-[20px] mb-[20px] bg-[#D8D8D8]' placeholder='Name' placeholderTextColor="#000"/>
        <StyledView className='flex-row mb-[20px]'>
          <StyledInput secureTextEntry={!isPasswordVisible} onChangeText={setPassword} className='w-full flex-1 rounded-[20px] p-[20px]  bg-[#D8D8D8]' placeholder='Password' placeholderTextColor="#000"/>
          <StyledButton onPress={togglePasswordVisibility} className='absolute right-0 mx-[10px] self-center'>
            {isPasswordVisible ? <EyeOnSvg/> : <EyeOffSvg/>}
          </StyledButton>
        </StyledView>


        <StyledText className='text-center mb-[20px] text-[#000]'>Forgot password? </StyledText>

        <StyledButton className='p-[20px] bg-[#0F853B] rounded-[20px]'>
            <StyledText className='text-white text-center'>Sign in</StyledText>
        </StyledButton>

        <StyledText className='text-center my-[20px]'>or</StyledText>

        <StyledView className='flex-row mt-[20px]'>
          <StyledButton className='ml-[40px]'>
            <StyledImage  source={require("../../assets/images/apple.png")}/>
          </StyledButton>
          <StyledButton className='mx-[20px]'>
            <StyledImage  source={require("../../assets/images/google.png")}/>
          </StyledButton>
          <StyledButton>
            <StyledImage source={require("../../assets/images/facebook.png")}/>
          </StyledButton>
        </StyledView>

        <StyledButton className='mt-[10px]' onPress={()=>navigation.navigate("RegisterPage")}>
          <StyledText className='text-[#898989] text-[20px] text-center'>Register</StyledText>
        </StyledButton>

      </StyledView>
    </StyledView>
  );
};

export default Login;

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
  
});

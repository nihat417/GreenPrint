import React,{useState} from 'react';
import { StyleSheet,Dimensions  } from 'react-native';
import { StyledButton,EyeOffSvg,EyeOnSvg , StyledImage, StyledInput, StyledText, StyledView, Vector1Svg, Vector2Svg, Vector3Svg } from '../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [carbonEmissionUse, setCarbonEmissionUse] = useState(0); 

    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(prevState => !prevState);
    };

    const handleRegister = async () => {
      try {
          const response = await fetch('http://10.0.2.2:4000/api/users/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  firstName,
                  lastName,
                  email,
                  password,
                  carbonEmissionUse, 
              }),
          });

          if (response.ok) {
              const data = await response.json();
              console.log('Registration successful:', data);
              navigation.navigate("LoginPage");
          } else {
              const errorData = await response.json();
              console.error('Registration error:', errorData);
          }
      } catch (error) {
          console.error('Request error:', error);
      }
  };

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
          <StyledInput value={firstName} onChangeText={setFirstName} className='rounded-[20px]  p-[20px] mb-[20px] bg-[#D8D8D8]' placeholder='Name' placeholderTextColor="#000"/>
          <StyledInput value={lastName} onChangeText={setLastName} className='rounded-[20px] p-[20px] mb-[20px] bg-[#D8D8D8]' placeholder='Surname' placeholderTextColor="#000"/>
          <StyledInput value={email} onChangeText={setEmail} className='rounded-[20px] p-[20px] mb-[20px] bg-[#D8D8D8]' placeholder='Mail' placeholderTextColor="#000"/>
          <StyledView className='flex-row mb-[20px]'>
          <StyledInput secureTextEntry={!isPasswordVisible} onChangeText={setPassword} className='w-full flex-1 rounded-[20px] p-[20px]  bg-[#D8D8D8]' placeholder='Password' placeholderTextColor="#000"/>
          <StyledButton onPress={togglePasswordVisibility} className='absolute right-0 mx-[10px] self-center'>
            {isPasswordVisible ? <EyeOnSvg/> : <EyeOffSvg/>}
          </StyledButton>
        </StyledView>
  
          <StyledButton className='p-[20px] bg-[#0F853B] rounded-[20px]' onPress={handleRegister}>
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
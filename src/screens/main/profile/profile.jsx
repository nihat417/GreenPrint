import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { EmitionHistory, ExitSvg, StyledButton, StyledImage, StyledText, StyledView, SuggestionsSvg } from '../../../common/StyledComponents';
import { useEncryptedStorage,useStorage } from '../../../hooks/useStorage';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [accessToken, setAccessToken, removeAccessToken] = useEncryptedStorage('accessToken','',);
  const [refreshToken, setRefreshToken, removeRefreshToken] = useEncryptedStorage('refreshToken', '');
  const [authorized, setAuthorized, removeAuthorized] = useStorage( 'authorized',false,);
  const [firstName, setFirstName] = useState('');


  const getUserInfo = async () => {
    if (accessToken) {
      try {
        const response = await fetch('http://10.0.2.2:4000/api/users/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        if (data && data.firstName) {
          setFirstName(data.firstName); 
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [accessToken]);

  const handleLogout = async () => {
    removeAccessToken();
    removeRefreshToken();
    removeAuthorized();
  };

  return (
    <StyledView className='bg-[#F2F2F2]'>
        <StyledText className='text-center font-bold text-[24px] my-[20px]'>Profile</StyledText>
        <StyledImage className='rounded-full w-[120px] h-[120px] self-center' source={require("../../../assets/images/usph.png")}/>
        <StyledText className='self-center text-[18px] font-semibold my-[10px]'>{firstName ? firstName : 'Loading...'}</StyledText>

        <StyledText className='text-black mx-[20px] mt-[50px] text-[18px] font-semibold'>Account</StyledText>
        <StyledView>
          
          <StyledButton onPress={()=>navigation.navigate("EmitionHistoryPage")} className='flex-row mx-[20px] items-center my-[10px] p-[5px] border-b-[1px] border-gray-300'>
            <EmitionHistory/>
            <StyledText className='text-[18px] mb-[2px] font-serif mx-[10px]'>Emition History</StyledText>
          </StyledButton>
          
          <StyledButton onPress={()=>navigation.navigate("SugesstionsPage")} className='flex-row mx-[20px] items-center my-[10px] p-[5px] border-b-[1px] border-gray-300'>
            <SuggestionsSvg/>
            <StyledText className='text-[18px] mb-[2px] font-serif mx-[10px]'>suggestions for you</StyledText>
          </StyledButton>

          <StyledButton onPress={handleLogout} className='flex-row mx-[20px] my-[10px] items-center p-[5px] border-b-[1px] border-gray-300'>
            <ExitSvg className="ml-[5px]"/>
            <StyledText className='text-[18px] mb-[2px] font-serif mx-[10px]'>Log out</StyledText>
          </StyledButton>
          
        </StyledView>
    </StyledView>
  )
}

export default Profile;
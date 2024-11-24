import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EmitionHistory, ExitSvg, StyledButton, StyledImage, StyledText, StyledView, SuggestionsSvg } from '../../../common/StyledComponents';

const Profile = () => {
  return (
    <StyledView className='bg-[#F2F2F2]'>
        <StyledText className='text-center font-bold text-[24px] my-[20px]'>Profile</StyledText>
        <StyledImage className='rounded-full w-[120px] h-[120px] self-center' source={require("../../../assets/images/usph.png")}/>
        <StyledText className='self-center text-[18px] font-semibold my-[10px]'>Name</StyledText>

        <StyledText className='text-black mx-[20px] mt-[50px] text-[18px] font-semibold'>Account</StyledText>
        <StyledView>
          
          <StyledButton className='flex-row mx-[20px] items-center my-[10px] p-[5px] border-b-[1px] border-gray-300'>
            <EmitionHistory/>
            <StyledText className='text-[18px] mb-[2px] font-serif mx-[10px]'>Emition History</StyledText>
          </StyledButton>
          
          <StyledButton className='flex-row mx-[20px] items-center my-[10px] p-[5px] border-b-[1px] border-gray-300'>
            <SuggestionsSvg/>
            <StyledText className='text-[18px] mb-[2px] font-serif mx-[10px]'>suggestions for you</StyledText>
          </StyledButton>

          <StyledButton className='flex-row mx-[20px] my-[10px] items-center p-[5px] border-b-[1px] border-gray-300'>
            <ExitSvg className="ml-[5px]"/>
            <StyledText className='text-[18px] mb-[2px] font-serif mx-[10px]'>Emition History</StyledText>
          </StyledButton>
          
        </StyledView>
    </StyledView>
  )
}

export default Profile;
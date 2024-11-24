import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledInput, StyledScrollView, StyledText, StyledView } from '../../../common/StyledComponents';

const CalculateEmision = () => {
  return (
    <StyledView>
        <StyledText className='text-green-900 text-[24px] font-bold text-center my-[20px]'>Calculate</StyledText>
        <StyledScrollView>

            {/* inputs */}

            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[300px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Weekly distance by car(km)'/>
            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[300px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Weekly distance by Public Transport(km)'/>
            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[300px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Number of flights Annualy'/>
            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[300px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Monthly Electricity Usage(KWH)'/>
            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[300px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Type of home Heating'/>
            {/* <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[300px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Your diet'/> */}
            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[300px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Weekly Trash Generated'/>
            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[300px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Monthly spending on online Shopping'/>
            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[300px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Number of people in family'/>

            <StyledView className='my-[100px]'/>
        </StyledScrollView>
    </StyledView>
  )
}

export default CalculateEmision;
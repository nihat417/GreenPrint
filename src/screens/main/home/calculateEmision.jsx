import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { DontSeeElm, LeftArrowSvg, StyledButton, StyledInput, StyledScrollView, StyledText, StyledView } from '../../../common/StyledComponents';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const CalculateEmision = () => {
    const [selectedDiet, setSelectedDiet] = useState("");
    const navigation = useNavigation();
  return (
    <StyledView>
        <StyledView className='flex-row justify-between my-[20px] items-center'>
            <StyledButton className='ml-[20px]' onPress={()=>navigation.goBack()}>
                <LeftArrowSvg/>
            </StyledButton>
            <StyledText className='text-green-900 text-[24px] font-bold '>Calculate</StyledText>
            <StyledView className='mr-[20px]'>
                <DontSeeElm/>
            </StyledView>
        </StyledView>

        <StyledScrollView>

            {/* inputs */}

            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Weekly distance by car(km)'/>
            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Weekly distance by Public Transport(km)'/>
            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Number of flights Annualy'/>
            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Monthly Electricity Usage(KWH)'/>
            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Type of home Heating'/>

            <StyledView className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px]  bg-[#fff]'>
                <Picker selectedValue={selectedDiet} onValueChange={(itemValue) => setSelectedDiet(itemValue)}>
                    <Picker.Item label="Vegetarian" value="vegetarian" />
                    <Picker.Item label="Comprehensive" value="comprehensive" />
                    <Picker.Item label="Vegan" value="vegan" />
                </Picker>
            </StyledView>
            
            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Weekly Trash Generated'/>
            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Monthly spending on online Shopping'/>
            <StyledInput  className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Number of people in family'/>


            <StyledText className='text-center text-[20px] text-black mt-[20px]'>Total Emission:</StyledText>

            <StyledView className='my-[100px]'/>
        </StyledScrollView>
    </StyledView>
  )
}

export default CalculateEmision;
import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { DontSeeElm, LeftArrowSvg, StyledButton, StyledInput, StyledScrollView, StyledText, StyledView } from '../../../common/StyledComponents';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { useEncryptedStorage } from '../../../hooks/useStorage';

const CalculateEmision = () => {
    const [selectedDiet, setSelectedDiet] = useState("");
    const navigation = useNavigation();

    const [userId, setUserId] = useState('');
    const [carDistance, setCarDistance] = useState('');
    const [publicTransport, setPublicTransport] = useState('');
    const [flights, setFlights] = useState('');
    const [electricity, setElectricity] = useState('');
    const [homeHeating, setHomeHeating] = useState('');
    const [weeklyTrashGenerated, setWeeklyTrashGenerated] = useState('');
    const [onlineShop, setOnlineShop] = useState('');
    const [numberOfPeopleInFamily, setNumberOfPeopleInFamily] = useState('');
    const [totalEmission, setTotalEmission] = useState(null);

    const [accessToken, setAccessToken] = useEncryptedStorage('accessToken', '');

    const getUserId = async () => {
        if (accessToken) {
          try {
            const response = await fetch('http://10.0.2.2:4000/api/users/userId', {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
            });
            const data = await response.json();
            console.log(data)
            return data.userId; 
          } catch (error) {
            console.error('Error fetching userId:', error);
          }
        }
        return null;
      };

      const submitEmissionData = async () => {
        const userId = await getUserId();
        if (userId) {
            const emissionData = {
                userId: userId,
                carDistance: parseInt(carDistance),
                publicTransport: parseInt(publicTransport),
                flights: parseInt(flights),
                electricity: parseInt(electricity),
                homeHeating: parseInt(homeHeating),
                diet: selectedDiet,
                weeklyTrashGenerated: parseInt(weeklyTrashGenerated),
                onlineShop: parseInt(onlineShop),
                numberOfPeopleInFamily: parseInt(numberOfPeopleInFamily),
            };
    
            try {
                const response = await fetch('http://10.0.2.2:4000/api/carbonuses/addEmission', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(emissionData),
                });
                const data = await response.json();
                console.log('Emission data submitted:', data);
    
                if (data.result) {
                    const roundedEmission = data.result.toFixed(2);
                    setTotalEmission(roundedEmission); 
                }
            } catch (error) {
                console.error('Error submitting emission data:', error);
            }
        }
    };
    

      useEffect(() => {
        if (totalEmission !== null) {
            console.log("Total Emission updated:", totalEmission);
        }
    }, [totalEmission]);
    
    
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

            <StyledInput value={carDistance} onChangeText={setCarDistance} keyboardType='numeric'  className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Weekly distance by car(km)'/>
            <StyledInput value={publicTransport} onChangeText={setPublicTransport} keyboardType='numeric' className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Weekly distance by Public Transport(km)'/>
            <StyledInput value={flights} onChangeText={setFlights} keyboardType='numeric' className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Number of flights Annualy'/>
            <StyledInput value={electricity} onChangeText={setElectricity} keyboardType='numeric' className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Monthly Electricity Usage(KWH)'/>
            <StyledInput value={homeHeating} onChangeText={setHomeHeating} className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Type of home Heating'/>

            <StyledView className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px]  bg-[#fff]'>
                <Picker selectedValue={selectedDiet} onValueChange={(itemValue) => setSelectedDiet(itemValue)}>
                    <Picker.Item label="Vegetarian" value="vegetarian" />
                    <Picker.Item label="Comprehensive" value="comprehensive" />
                    <Picker.Item label="Vegan" value="vegan" />
                </Picker>
            </StyledView>
            
            <StyledInput value={weeklyTrashGenerated} onChangeText={setWeeklyTrashGenerated} keyboardType='numeric' className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Weekly Trash Generated'/>
            <StyledInput value={onlineShop} onChangeText={setOnlineShop} keyboardType='numeric' className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Monthly spending on online Shopping'/>
            <StyledInput value={numberOfPeopleInFamily} onChangeText={setNumberOfPeopleInFamily} keyboardType='numeric' className='self-center mx-[20px] mt-[15px] min-w-[320px] border-b-gray-500 border-[1px] p-[20px] bg-[#fff]' placeholder='Number of people in family'/>


            <StyledButton onPress={submitEmissionData} className='self-center my-[20px] rounded-[10px] bg-green-900 px-[40px] py-[10px]'>
                <StyledText className='text-white text-[16px]'>Submit</StyledText>
            </StyledButton>

            {totalEmission !== null && (
                <StyledText className="text-center text-[20px] text-black mt-[20px]">
                    Total Emission: {totalEmission}
                </StyledText>
            )}


            <StyledView className='my-[100px]'/>
        </StyledScrollView>
    </StyledView>
  )
}

export default CalculateEmision;
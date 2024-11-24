import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useEncryptedStorage } from '../../../hooks/useStorage';

const Emitionhistory = () => {
  const [loading, setLoading] = useState(true);
  const [carbonEmissions, setCarbonEmissions] = useState([]);
  const [error, setError] = useState(null);
  
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
        return data.userId;
      } catch (error) {
        console.error('Error fetching userId:', error);
        setError('Error fetching user ID');
      }
    }
    return null;
  };

  const fetchUserEmissions = async () => {
    if (!accessToken) {
      setError('Access token is missing');
      setLoading(false);
      return;
    }
    
    const userId = await getUserId();
    if (userId) {
      try {
        const response = await fetch(`http://10.0.2.2:4000/api/users/me`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setCarbonEmissions(data.carbonEmissions); 
      } catch (error) {
        console.error('Error fetching carbon emissions:', error);
        setError('Error fetching carbon emissions');
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchUserEmissions();
    } else {
      setLoading(false); 
    }
  }, [accessToken]);  

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header} >Emissions History</Text>
      <FlatList
        data={carbonEmissions}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>Car Distance: {item.carDistance} km</Text>
            <Text style={styles.text}>Public Transport: {item.publicTransport} km</Text>
            <Text style={styles.text}>Flights: {item.flights} km</Text>
            <Text style={styles.text}>Electricity: {item.electricity ? `${item.electricity} kWh` : 'N/A'}</Text>
            <Text style={styles.text}>Home Heating: {item.homeHeating ? `${item.homeHeating} kWh` : 'N/A'}</Text>
            <Text style={styles.text}>Diet: {item.diet}</Text>
            <Text style={styles.text}>Weekly Trash: {item.weeklyTrashGenerated ? `${item.weeklyTrashGenerated} kg` : 'N/A'}</Text>
            <Text style={styles.text}>Monthly Spending: ${item.monthlySpending}</Text>
            <Text style={styles.text}>Online Shop: {item.onlineShop ? `${item.onlineShop} items` : 'N/A'}</Text>
            <Text style={styles.text}>Family Members: {item.numberOfPeopleInFamily}</Text>
            <Text style={styles.result}>Total Emissions: {item.result.toFixed(3)} kg CO₂</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
  },
  item: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff4d4d',
  },
});

export default Emitionhistory;

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useEncryptedStorage } from '../../../hooks/useStorage';

const Sugesstions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [accessToken, setAccessToken] = useEncryptedStorage('accessToken', '');
  const [userId, setUserId] = useState(null);  

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
        console.log(data);
        return data.userId; 
      } catch (error) {
        console.error('Error fetching userId:', error);
      }
    }
    return null;
  };

  useEffect(() => {
    const fetchData = async () => {
      const userId = await getUserId();
      if (userId) {
        setUserId(userId);  
      }
    };

    fetchData();
  }, [accessToken]);

  useEffect(() => {
    if (userId) {
      const fetchSuggestions = async () => {
        try {
          const response = await fetch(`http://10.0.2.2:4000/api/carbonuses/suggestions/${userId}`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
          });

          const data = await response.json();
          console.log(data)
          if (data.suggestions) {
            setSuggestions(data.suggestions);  
          }
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      };

      fetchSuggestions();
    }
  }, [userId, accessToken]);  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suggestions for reducing carbon emissions:</Text>
      
      {suggestions.length > 0 ? (
        <ScrollView style={styles.suggestionsList}>
          {suggestions.map((suggestion, index) => (
            <Text key={index} style={styles.suggestionItem}>
              - {suggestion}
            </Text>
          ))}
        </ScrollView>
      ) : (
        <Text>No suggestions available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  suggestionsList: {
    marginTop: 10,
  },
  suggestionItem: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
});

export default Sugesstions;

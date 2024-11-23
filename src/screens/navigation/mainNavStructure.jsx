import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { StyledView, StyledButton, TabHomeSvg, TabProfileSvg, StyledText } from '../../../common/StyledComponents';

const MainNavStructure = ({ state, navigation }) => {
    const getIconColor = (index) => (state.index === index ? '#0066FF' : '#8B8B94');

    return (
        <StyledView style={styles.container}>
            <StyledButton onPress={() => navigation.navigate('Home', { screen: 'HomePage' })} style={styles.button}>
                <TabHomeSvg color={getIconColor(0)} />
                <StyledText style={[styles.label, { color: getIconColor(0) }]}>Home</StyledText>
            </StyledButton>
            <StyledButton onPress={() => navigation.navigate('Profile', { screen: 'ProfilePage' })} style={styles.button}>
                <TabProfileSvg color={getIconColor(3)} />
                <StyledText style={[styles.label, { color: getIconColor(3) }]}>Settings</StyledText>
            </StyledButton>
        </StyledView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0F853B',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
    },
    button: {
        alignItems: 'center',
    },
    label: {
        marginTop: 4, 
        fontSize: 12,
    },
});

export default MainNavStructure;
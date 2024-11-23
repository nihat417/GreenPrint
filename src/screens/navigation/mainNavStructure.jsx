import { StyleSheet } from 'react-native';
import React from 'react';
import { StyledView, StyledButton, TabHomeSvg, TabProfileSvg, StyledText } from '../../common/StyledComponents';

const MainNavStructure = ({ state, navigation }) => {
    const getIconColor = (index) => (state.index === index ? '#0F853B' : '#000');

    return (
        <StyledView style={styles.container}>
            <StyledButton onPress={() => navigation.navigate('Home', { screen: 'HomePage' })} style={styles.button}>
                <TabHomeSvg color={getIconColor(0)} />
                <StyledText style={[styles.label, { color: getIconColor(0) }]}>Home</StyledText>
            </StyledButton>
            <StyledButton onPress={() => navigation.navigate('Profile', { screen: 'ProfilePage' })} style={styles.button}>
                <TabProfileSvg color={getIconColor(1)} />
                <StyledText style={[styles.label, { color: getIconColor(1) }]}>Settings</StyledText>
            </StyledButton>
        </StyledView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
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

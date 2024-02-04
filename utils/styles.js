import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    playButton: {
      backgroundColor: colors.primary,
      paddingLeft: '5%',
      paddingVertical: '8%',
      borderRadius: 5,
    },
    descriptionText: {
      color: colors.text,
      fontSize: '14%',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    companyText: {
      color: colors.text,
      fontSize: '18%',
      fontWeight: 'bold',
    },
    companyIcon: {
      height: 50,
      width: 50,
    },
    companyDescription: {
      color: colors.text,
      fontSize: '12%',
    },
    companyContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    moneyText: {
      color: colors.money,
      fontSize: '16%',
      fontWeight: 'bold',
    },
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '5%',
      backgroundColor: colors.secondary,
      borderRadius: 30,
      width: '90%',
    },
    optionElementContainer: {
      paddingHorizontal: '2.5%',
      justifyContent: 'center',
    },
});

export default styles;

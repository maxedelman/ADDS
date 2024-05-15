import { StyleSheet } from 'react-native';
import colors from './colors';
import AppSelection from '../components/pages/AppSelection';
import CashText from '../components/atoms/CashText';

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    companyText: {
      color: 'white',
      fontSize: '18%',
      fontWeight: 'bold',
    },
    companyTextContainer: {
      backgroundColor: 'black',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: '5%',
      paddingVertical: '1%',
    },
    cashText: {
      paddingTop: '.5%',
    },
    companyIcon: {
      borderRadius: 150,
      resizeMode: 'contain',
      width: 100,
      height: 100,
    },
    companyDescription: {
      color: colors.text,
      fontSize: '12%',
    },
    companyContainer: {
      alignItems: 'center',
    },
    moneyText: {
      color: colors.money,
      fontSize: '16%',
      fontWeight: 'bold',
    },
    appOptionContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.primary,
      borderRadius: 30,
      width: '95%',
    },
    optionElementContainer: {
      justifyContent: 'center',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: "5%",
      height: 30,
      backgroundColor: colors.primary,
    },
    headerContainer: {
      borderRadius: 50,
      borderWidth: 2,
      borderColor: 'black',
      width: 60, 
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    headerTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold'
    },
    headerButtonText: {
      color: 'white',
      fontSize: 16,
    },
    moneyText: {
      color: 'black',
      fontWeight: 'bold',
    },
    appSelectionContainer: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingVertical: '5%',
    },
    itemContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: '1%',
    },
});

export default styles;

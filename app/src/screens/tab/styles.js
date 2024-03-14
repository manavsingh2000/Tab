import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../../res/Colors';
const Screen = Dimensions.get('screen');

const SCREEN_WIDTH = Screen.width
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightPink
    },
    subContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    scrollContainer: {
        height: 30,
        backgroundColor: Colors.white,
        width: '90%',
        borderRadius: 10,
        shadowColor: Colors.shadowColor,
        shadowOffset: { width: 2, height: 4 },
        shadowRadius: 3,
        shadowOpacity: 4,
    },
    rowAlignment: {
        flexDirection: 'row'
    },
    pressStyle: {
        marginVertical: 5,
        marginHorizontal: 4,
        paddingHorizontal: 5,
        borderRadius: 5
    },
    tabText: {
        color: Colors.black,
        fontSize: 14
    },
    headingLabel: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: Colors.black
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.black
    },
    valueText: {
        fontSize: 16,
        color: Colors.black
    },
    keyParaContainer: {
        flex: 1,
        marginHorizontal: 20
    },
    constantFlex: {
        flex: 1
    },
    tableContainer: {
        flexDirection: 'row',
        marginBottom: 5,
        width: SCREEN_WIDTH,
        marginHorizontal: 10
    },
    tableTitle: {
        fontWeight: 'bold',
        color: Colors.black,
        fontSize: 14
    },
    tableValue: {
        fontSize: 14,
        color: Colors.grey
    },
    divider: {
        borderWidth: 0.5,
        marginTop: 10
    }
})

export default styles
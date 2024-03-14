import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TabDescription from './TabDescription';
import EmptyContainer from './EmptyContainer';
import { apis } from '../../../res/URL';
import styles from './styles';
import Strings from '../../../res/Strings';
import Colors from '../../../res/Colors';

const Tab = () => {
    const [selectedTab, setselectedTab] = useState()
    const [tabs, setTabs] = useState([])
    const [tabdescription, settabdescription] = useState('')

    useEffect(() => {
        fetchData().then((data) => {
            setTabs(Object.entries(data));
        });
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(apis.tabApi);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(Strings.error.errorMessage, error);
            return null;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.scrollContainer}>
                    <ScrollView style={styles.rowAlignment} horizontal showsHorizontalScrollIndicator={false}>
                        {tabs.map(([item, data], index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => {
                                    settabdescription(data)
                                    setselectedTab(index)
                                }} style={[styles.pressStyle, { backgroundColor: selectedTab === index ? Colors.lightBlue : null, }]}>
                                    <Text style={styles.tabText}>{item}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
                {selectedTab != undefined ?
                    <TabDescription content={tabdescription} />
                    :
                    <EmptyContainer data={Strings.tab.selectTab} />}
            </View>
        </View>
    )
}

export default Tab

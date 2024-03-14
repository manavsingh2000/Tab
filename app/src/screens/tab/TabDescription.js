import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import EmptyContainer from './EmptyContainer';
import styles from './styles';
import Strings from '../../../res/Strings';

const TabDescription = ({ content }) => {
    if (!content) return null;
    let type = ''
    if (Object.values(content).length >= 2) {
        type = Object.values(content)[0][0].type
    }
    else {
        type = content[0]?.type;
    }
    if (type == 'KEY_VALUE') {
        const flatListData = [
            ...content.favourablePoints,
            ...content.numerologyReport,
            ...content.ascendantReport
        ];
        return (
            flatListData.map((items, index) => {
                if (items.type == 'KEY_VALUE') {
                    let data = Object.entries(items?.data)
                    return (
                        <View key={index}>
                            <Text style={styles.headingLabel}>{Strings.tab.keyValueText}</Text>
                            <FlatList
                                data={data}
                                keyExtractor={(item) => item[0]}
                                renderItem={({ item }) => (
                                    <View style={[styles.rowAlignment, { marginVertical: 5 }]}>
                                        <Text style={styles.titleText}>{item[0]}:  </Text>
                                        <Text style={styles.valueText}>{item[1]}</Text>
                                    </View>
                                )}
                            />
                        </View>
                    )
                }
            })
        )
    }
    else if (type == 'PARAGRAPH') {
        return (
            <View>
                <Text style={styles.headingLabel}>{Strings.tab.paragraphText}</Text>
                {Array.isArray(content.data) ? (
                    content.data.map((paragraph, index) => (
                        <Text key={index}>{paragraph}</Text>
                    ))
                ) : (
                    <Text>{content.data}</Text>
                )}
            </View>
        );
    }
    else if (type == 'KEY_PARAGRAPH') {
        const flatListData = [
            ...content.kalsarpaDosha,
            ...content.manglikDosha,
            ...content.sadhesatiAnalysis
        ];
        return (
            <View style={styles.keyParaContainer}>
                <Text style={styles.headingLabel}>{Strings.tab.keyParagraphText}</Text>
                <ScrollView style={{ marginVertical: 10 }} showsVerticalScrollIndicator={false}>
                    {flatListData.map((items, index) => {
                        if (items.type == 'KEY_PARAGRAPH') {
                            let data = Object.entries(items?.data)
                            return (
                                <View key={index}>
                                    {data?.map(([key, value], index) => (
                                        <View key={index}>
                                            <Text style={styles.titleText}>{key}</Text>
                                            <Text style={styles.valueText}>{value.toString()}</Text>
                                        </View>
                                    ))}
                                </View>
                            );
                        }
                    }
                    )}
                </ScrollView>
            </View>
        )
    }
    else if (type == 'TABLE') {
        return (
            <View style={styles.constantFlex}>
                <Text style={styles.headingLabel}>{Strings.tab.tableText}</Text>
                <ScrollView horizontal >
                    <FlatList
                        data={content[0]?.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.tableContainer}>
                                {Object.entries(item).map(([key, value]) => (
                                    <View key={key} style={styles.constantFlex}>
                                        <Text style={styles.tableTitle}>{key}</Text>
                                        <Text style={styles.tableValue}>{value}</Text>
                                        <View style={styles.divider} />
                                    </View>
                                ))}
                            </View>
                        )}
                    />
                </ScrollView>
            </View>
        );
    }
    else {
        return (
            <EmptyContainer data={Strings.tab.noDataText} />
        )
    }
}



export default TabDescription
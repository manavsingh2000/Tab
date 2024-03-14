import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const EmptyContainer = (data) => {
    return (
        <View>
            <Text style={[styles.headingLabel, { marginTop: 200 }]}>{data?.data}</Text>
        </View>
    )
}

export default EmptyContainer
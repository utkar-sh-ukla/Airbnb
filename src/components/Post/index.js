import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const Post = ( { post } ) => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image
                style={styles.image}
                source={{ uri: post.image }}
            />

            {/* Bed & Bedroom */}
            <Text style={styles.bed}>
                {post.bed} bed {post.bedroom} bedroom
            </Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}.{post.title}
            </Text>

            {/* Old price & new price */}
            <Text style={styles.price}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.newPrice}>  ${post.newPrice}</Text>
            </Text>

            {/* Total price */}
            <Text style={styles.totalPrice}>
                ${post.totalPrice} total
            </Text>
        </View>
    )
}

export default Post
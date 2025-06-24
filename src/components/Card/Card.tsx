import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

import {myStyles} from './Card.styles'
import {useColor} from '@/hooks'

export interface Item {
  title: String
  description: String
}

interface CardProps {
  item: Item
  onPress: (data: Item) => void
}

const Card = ({item, onPress}: CardProps) => {
  const colors = useColor()
  const styles = myStyles(colors)

  return (
    <TouchableOpacity
      onPress={() => {
        onPress(item)
      }}
      style={styles.cardContainer}
    >
      <Text style={styles.title}>{item?.title}</Text>
      <Text style={styles.descStyle} numberOfLines={2}>
        {item?.description}
      </Text>
    </TouchableOpacity>
  )
}

Card.defaultProps = {}

export default Card

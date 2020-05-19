import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default function seeAll() {
  return (
    <TouchableOpacity>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#439D46',
          marginTop: 5,
          marginRight: 7,
        }}>
        Lihat Semua
      </Text>
    </TouchableOpacity>
  );
}

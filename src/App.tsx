import React from 'react';
import {Text, View, Button} from 'react-native';

export interface AppProps {
  count:number;
  increment:()=>void;
}

export const app = (props:AppProps) => {
  return (
    <View>
      <Text>{props.count}</Text>
      <Button title={"add"} onPress={props.increment}></Button>
    </View>
  )
}
import React from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { CustomComponent } from './CustomComponent';

export interface AppProps {
  count:number;
  increment:()=>void;
}

export const app = (props:AppProps) => {
  return (

    <CustomView>
      <CustomComponent text={`${props.count+1}`} />
      <Text>{props.count}</Text>
      <TouchableOpacity onPress={props.increment}>
        <View>Add</View>
      </TouchableOpacity>
    </CustomView>
  )
}

export const CustomView = styled.View``
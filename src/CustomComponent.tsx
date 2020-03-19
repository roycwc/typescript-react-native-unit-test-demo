import React from "react";
import { Text } from "react-native"

export const CustomComponent  = (props:{text:string})=>{
  return (
    <Text>{props.text}</Text>
  )
}
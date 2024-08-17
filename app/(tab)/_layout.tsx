import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { Tabs } from "expo-router"

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="login" />
      <Tabs.Screen name="signup" />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})

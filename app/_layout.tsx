import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import React from "react"
import { Stack } from "expo-router"

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tab)" />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})

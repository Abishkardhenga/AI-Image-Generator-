import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native"
import React from "react"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"

const index = () => {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <View>
        <Text>index</Text>
        <Pressable onPress={() => router.push("/login")}>
          <Text>Click here</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})

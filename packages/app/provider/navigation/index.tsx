import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export function NavigationProvider({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'todolist',
            screens: {
              todolist: 'todolist',
              login: 'login',
              taskList:'taskList',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}

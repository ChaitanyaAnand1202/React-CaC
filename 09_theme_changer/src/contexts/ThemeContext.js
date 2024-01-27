import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {}
})

export const ThemeContextProvider = ThemeContext.Provider

export const useTheme = function(){
  const theme = useContext(ThemeContext)
  return theme;
}

# Powerswap UIkit

Powerswap UIkit is a set of React components and hooks used to build pages on Pancake's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @powerswap/uikit`

## Setup

### Theme

Before using powerswap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@powerswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@powerswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

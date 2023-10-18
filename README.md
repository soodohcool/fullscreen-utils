# Fullscreen Utility

This utility provides an easy way to toggle fullscreen mode in your web application. It's built as a Singleton class and uses the browser's native Fullscreen API.

## Installation

1. Place the `FullscreenUtility.js` file in your project directory.

## Standard Usage

Refer to the `demo.html` file located in the root directory of this repository. 

***NOTE: Make sure you specify `type="module"` in your `<script>` tag as the utility is a module***

## Importing the Utility

### For Vue.js

Import the utility:
```javascript
    import { fullscreenUtility } from './path/to/FullscreenUtility'
```

Usage in Vue Component:
```javascript
    <template>
      <button @click="toggleFullscreen">Toggle Fullscreen</button>
    </template>

    <script>
    import { fullscreenUtility } from './path/to/FullscreenUtility'

    export default {
      methods: {
        toggleFullscreen() {
          try {
            fullscreenUtility.toggleFullscreen(this.$el)
          } catch (err) {
            console.error('An error occurred:', err)
          }
        }
      }
    }
    </script>
```

### For React.js

Import the utility:
```javascript
    import { fullscreenUtility } from './path/to/FullscreenUtility'
```
Usage in React Component:
```javascript
    import React from 'react'
    import { fullscreenUtility } from './path/to/FullscreenUtility'

    function App() {
      const toggleFullscreen = () => {
        try {
          fullscreenUtility.toggleFullscreen(document.documentElement)
        } catch (err) {
          console.error('An error occurred:', err)
        }
      }

      return (
        <button onClick={toggleFullscreen}>Toggle Fullscreen</button>
      )
    }
```

### For Angular

First, you will need to make sure the utility is compatible with Angular's module system. You might need to modify the utility or wrap it as an Angular service.

Usage in Angular Component:
```javascript
    import { Component } from '@angular/core'
    import { fullscreenUtility } from './path/to/FullscreenUtility'

    @Component({
      selector: 'app-root',
      template: '<button (click)="toggleFullscreen()">Toggle Fullscreen</button>'
    })
    export class AppComponent {
      toggleFullscreen() {
        try {
          fullscreenUtility.toggleFullscreen(document.documentElement)
        } catch (err) {
          console.error('An error occurred:', err)
        }
      }
    }
```

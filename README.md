# react-action-bar

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://video-chat-mihir.vercel.app/)&nbsp;[![Build passing](https://img.shields.io/badge/Build-Passing-brightgreen.svg?style=flat-square)](https://video-chat-mihir.vercel.app/)&nbsp;[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://video-chat-mihir.vercel.app/)&nbsp;[![License](https://img.shields.io/badge/license-MIT-brightgreen)](https://video-chat-mihir.vercel.app/)&nbsp;![Made with Love in India](https://madewithlove.org.in/badge.svg)

# Demo

![enter image description here](https://raw.githubusercontent.com/mihir0699/react-action-bar/main/src/images/React%20App%20%283%29.gif?token=ALT5AMGLGAGNLX35YVJXM2LBSDGLY)

🎉 react-action-bar allows you to simplify form submission and data updation with just a few lines of code.

## Installation :

```
$ npm install react-action-bar
$ yarn add react-action-bar
```

## Features

- No need to scroll up or down to save the form or update data.
- Fully customisable.
- Very light weight (~30kb)
- Discard action button.

## Code example:

      import React from 'react';
      import ActionBar from 'react-action-bar';

      function App(){
        return (
          <div>
           <ActionBar
    		isVisible={visible}
    		primaryAction={handleSave}
    		discardAction={handleDiscard}
    		/>
          </div>
    );

}

## Props

| Prop            | Description                                                         | Type     | Required | Default         |
| :-------------- | ------------------------------------------------------------------- | -------- | -------- | --------------- |
| isVisible       | accepts a boolean to evaluate whether to show action bar            | Boolean  | true     | -               |
| primaryAction   | accepts a function to execute when primary action button is clicked | function | true     | -               |
| discardAction   | accepts a function to execute when discard action button is clicked | function | true     | -               |
| message         | message to display on the action bar                                | function | true     | Unsaved changes |
| backgroundColor | background color of the action bar                                  | string   | false    | #000            |
| primaryColor    | primary color of the action bar                                     | string   | false    | #008060         |
| primaryTitle    | title of the primary action button                                  | string   | false    | Save            |
| discardTitle    | title of the discard action button                                  | string   | false    | Discard         |

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome!

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
<a href="https://www.buymeacoffee.com/mihir0699" target="_blank">
<img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

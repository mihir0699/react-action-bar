# react-action-bar (npm package) ✨

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://video-chat-mihir.vercel.app/)&nbsp;[![Build passing](https://img.shields.io/badge/Build-Passing-brightgreen.svg?style=flat-square)](https://video-chat-mihir.vercel.app/)&nbsp;[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://video-chat-mihir.vercel.app/)&nbsp;[![License](https://img.shields.io/badge/license-MIT-brightgreen)](https://video-chat-mihir.vercel.app/)&nbsp;![Made with Love in India](https://madewithlove.org.in/badge.svg)

# Demo

![enter image description here](https://fruit-slice.s3.ap-south-1.amazonaws.com/Fruit-Slice-Game-master/React%20App%20%283%29.gif?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf//////////wEaCmFwLXNvdXRoLTEiRjBEAiAAoR8uMoHHpkU0iUzpjnenfkSt41pESNf7qwt4NEER1QIgO3d3NpaUii%2bSS2Y6z5FG8o7R/wRZLcnlK0XPtys/cBgqmgMIof//////////ARACGgw2NzY1MTA0Mjg1MTciDFI2mV3TtOOF%2bQ1IoiruAvXRVqcdIsTm/La7x1jB4bkqTFFAX6sSlIPqGW4r6ywn26KoCYfIkq3oRKaQWpJcYi5UbIhVIpRyoqdhZ2So7pHAthCZegO0XA4byBuZK64tGZuPH5pkcyI5bDshmZlromRPpN7OqOaVHqbRnoqhdudGldRWz0skpr4CfOS2QSSj11dngYkf7IlAD0a4XYyST8igElu1JUh2ZIIFX7hjwOuVQ%2bMRtdis2oM0fDxZSuOIOXjtN7uSbaTA1ygz6sWcmJvDY0iIeguS7KQYuKcTKWfFDEQUQcVPlJygQrUYUfc3UR8H3RhJwjiBW61s4d5d8m7dNvpc3KRJHZOQTU1VXZ1P5p/DFdPF6Ijk9V9Eqj6ZayLn4f218BkFfSDpQjxGQxkhFm2XyjOzMp/dP60%2bhw094jasAzayMfe1aS/gO0/L1ZgHPU7gT1i5BQDouut5RpjApyquhyK1fBpa/5dyws5wsBDoB6ZWVkje4cQDgDCN/Z2MBjq0An%2bYmwoB2lawvXgRXX2IKlD%2bmUgOWAQuVPVHgYRaVqNJTB16UJ9rC/7HpiBUNo583VvphO8ZRyhFB5KS03oMF7flz2oBuoiNI0WculcCBIdlY84dD4hdvBn/z02eyZu4bgAcNBOUGVoMWsiIOEpEDP3mpdWqxv0nIyr48jdQrngFrjlhbGB6tD0t1Jm8aCrTu9Loa%2buzXBgSE5Gx4u5HzbBBgQJfyMJBlS3o/vGWJaUEiR%2bY3L0snpKU30N4Lh2UZBxOF1z49tkX47ltWUaGnIsBKWciRMj30GbMWKUsMzIIDsUQiE1uKvg90WKkVowV4VEPmbRgrhMLy23/dgfTB4/jmcguwS9j6Bn2RMxXHEhO%2bydQDfwsxk3r/XiAq4sEHth8lVBFvketnwcCFOA6oYGAupvP&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211107T072247Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZ3AZJ5VSZLIK3WVX/20211107/ap-south-1/s3/aws4_request&X-Amz-Signature=4f841812976de50a7529b62208e3223a8d542269abe74f14132801b8ffe79366)

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

# Passage Example Vue App

This example application uses the Passage Element in a Vue application to authenticate users using biometrics or magic links. It also uses the Passage Profile Element on the dashboard to show off the profile functionality. To run this example application, follow the instructions below to install and start the 
application.

## Configure Your Environment Variables

1. Copy the EXAMPLE.env file to your own .env file.
2. Replace the example variable with your own Passage App ID. You can get these from the [Passage Console](https://console.passage.id).

## Building the Client

Run the following commands:

Install dependencies
```bash
npm install
```

Start the client in development mode
```bash
npm run serve
```

The client will run on http://localhost:8080, which you can navigate to in your browser.

## Authenticate Requests With Passage

Navigate to [http://localhost:8080](http://localhost:8080) and see what it's like authenticating users using Passage with Vue!

# Using Passage with Vue

## Importing and Using the Passage-Auth Custom Element
The easiest way to add authentication to a web frontend is with a Passage Auth custom element. First you'll need to install the [passage-elements](https://www.npmjs.com/package/@passageidentity/passage-elements) package from npm:
```
npm i --save @passageidentity/passage-elements
```
Then import the package in the module where you intend to use the custom element
```
import '@passageidentity/passage-elements/passage-auth'
```
Importing this script will register the Passage custom element for use in your Vue components. For more information about custom elements refer to the [online documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).

It's then just a matter of embedding the passage-auth element into your component that will handle login. This is done in this example in [frontend/src/views/Home.vue](https://github.com/passageidentity/example-vue/blob/main/frontend/src/views/Home.vue):
```html
<div class="authContainer">
  <passage-auth :app-id="appId"></passage-auth>
</div>
```

## Configuring Vue to Recognize Custom Elements
Vue works with custom elements out of the box but by default it will log a warning to the console that it could not resolve the component for the custom element. To configure Vue with information that the `<passage-auth>` tag is a custom element and suppress this warning you can add this configuration to [vue.config.js](https://github.com/passageidentity/example-vue/blob/main/frontend/vue.config.js):
```javascript
compilerOptions: {
  // treat any tag that starts with passage- as custom elements
  isCustomElement: (tag) => tag.startsWith('passage-'),
},
```

## Getting Authentication Status and User Information
After the user has logged in with Passage, you can retrieve basic user information from Passage using the PassageUser class exported from `@passageidentity/passage-elements/passage-user`. This example wraps this functionality into a reusable vue composable in [useAuthStatus](https://github.com/passageidentity/example-vue/blob/main/src/composables/useAuthStatus.js):
```
import { PassageUser } from '@passageidentity/passage-elements/passage-user'

export function useAuthStatus(){
...
  new PassageUser().userInfo().then(userInfo => {
...
```
The PassageUser class can be used as a route guard in your application, but it should NOT be make authorization decisions when fetching data from an API server. Route guards provide a better user experience, but less security than using one of Passage's backend libraries. For applications using an API server, you must use one of the Passage [backend SDKs](https://docs.passage.id/backend-libraries/overview) to safely verify user authentication tokens.
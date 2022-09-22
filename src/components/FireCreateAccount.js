import React from 'react';
import firebase from 'firebase/compat/app';
var firebaseui = require('firebaseui');


export default function FireAuth() {

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
          }
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
      };

    return (
        <>
            {ui.start('#firebaseui-auth-container', uiConfig)};
        </>
    )

}
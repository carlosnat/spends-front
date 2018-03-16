// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAcIs92lq5AmjdHYuqZBwn2jWcV3gxE7C0',
    authDomain: 'familyspends.firebaseapp.com',
    databaseURL: 'https://familyspends.firebaseio.com',
    projectId: 'familyspends',
    storageBucket: 'familyspends.appspot.com',
    messagingSenderId: '1041965202547'
  }
};

const successRedirect = '/';
const failureRedirect = '/';

export default {
  local: {
    provider: 'local',
    module: 'passport-local',
    usernameField: 'email',
    passwordField: 'password',
    authPath: '/auth/local',
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
    session: true,
    failureFlash: true
  },
  'github-login': {
    provider: 'github',
    authScheme: 'oauth2',
    module: 'passport-github2',
    authPath: '/auth/github',
    callbackURL: 'http://localhost:3000/auth/github/callback',
    callbackPath: '/auth/github/callback',
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    scope: ['user:email'],
    failureFlash: true,
    useCustomCallback: true,
  },
  // 'github-login': {
  //   provider: 'github',
  //   authScheme: 'oauth2',
  //   module: 'passport-github2',
  //   authPath: '/auth/github',
  //   callbackURL: '/auth/github/callback',
  //   callbackPath: '/auth/github/callback',
  //   successRedirect: successRedirect,
  //   failureRedirect: failureRedirect,
  //   clientID: process.env.GITHUB_ID,
  //   clientSecret: process.env.GITHUB_SECRET,
  //   scope: ['email'],
  //   failureFlash: true
  // },
  // 'google-login': {
  //   provider: 'google',
  //   authScheme: 'oauth2',
  //   module: 'passport-google',
  //   authPath: '/auth/google',
  //   callbackURL: '/auth/google/callback',
  //   callbackPath: '/auth/google/callback',
  //   successRedirect: successRedirect,
  //   failureRedirect: failureRedirect,
  //   clientID: process.env.GOOGLE_ID,
  //   clientSecret: process.env.GOOGLE_SECRET,
  //   scope: ['email'],
  //   failureFlash: true
  // },
  'auth0-login': {
    provider: 'auth0',
    module: 'passport-auth0',
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: process.env.AUTH0_DOMAIN,
    cookieDomain: 'freeCodeCamp.org',
    callbackURL: '/auth/auth0/callback',
    authPath: '/auth/auth0',
    callbackPath: '/auth/auth0/callback',
    useCustomCallback: true,
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
    scope: ['profile email'],
    failureFlash: true
  }
};

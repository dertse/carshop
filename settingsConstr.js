// constructs g.settings object
module.exports = function() {
  var appRoot = m.path.normalize(__dirname +'/');
  
  g.settings = {
    appRoot: appRoot,
    classLoader: {
      baseDir: m.path.join(appRoot,'classes/'),
      toLoad: [
        'DB',
        'REST',
        'Login',
        'Server'
      ]
    },
    Server: {
      endpoint: '*',
      webroot: 'www',
      indexFile: 'index.html',
      port: 3000
    },
    DB: {
      host: '127.0.0.1',
      db: 'SUW15dev',
      modelDir: m.path.join(appRoot,'models/')
    },
    REST: {
      route: '/rest/:model/:modelID?'
    },
    Login: {
      route: '/rest/login'
    }
  };
};
(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'ng2app': 'app/ng2',
    'ng1ng2': 'app/ng1-ng2',
    'rxjs': 'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular': 'node_modules/@angular',
    '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
    '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
    '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
    '@angular/upgrade': 'node_modules/@angular/upgrade/bundles/upgrade.umd.js'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'ng2app': { main: 'main.js', defaultExtension: 'js' },
    'ng1ng2': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };


  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);

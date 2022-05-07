const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  []);

module.exports = {
  output: {
    uniqueName: "shell"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "rxjs": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          '@angular/material': {
              singleton: true,
              strictVersion: true,
              requiredVersion: 'auto',
              includeSecondaries: true
          },
          "@angular/platform-browser": { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: true },
          "@angular/cdk": { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: true },
          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};

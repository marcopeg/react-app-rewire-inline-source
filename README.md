# react-app-rewire-inline-source

Enable source code inlining capabilities in a [react-app-rewired](https://github.com/timarney/react-app-rewired) application.

Inlining CSS has the great advantage to reduce the server hits and dramatically improve
time to first meaningful paint in your pwa.

```
/* config-overrides.js */
const rewireInlinSource = require('react-app-rewire-inline-source')

module.exports = function override (config, env) {
    config = rewireInlinSource(config, env)
    return config
}
```

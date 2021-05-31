# `detect-no-csrf-before-method-override`

Detects Express `csrf` middleware setup before `method-override` middleware. This can allow `GET` requests (which are not checked by `csrf`) to turn into `POST` requests later.

More information: [Bypass Connect CSRF](https://github.com/nodesecurity/eslint-plugin-security/blob/master/docs/bypass-connect-csrf-protection-by-abusing.md)

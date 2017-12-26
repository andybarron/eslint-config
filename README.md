# Andy's ESLint configuration

This is a strict and very opinionated ESLint preset for my various JavaScript
projects.

## Usage
Add `@andybarron/eslint-config` to the `extends` section of your ESLint
configuration file.

### Examples

#### JSON config file (e.g. `.eslintrc.json`)
```json
{
  "extends": "@andybarron/eslint-config"
}
```

#### YAML config file (e.g. `.eslintrc.yaml`)
*NOTE: The quotes are required due to the `@` sign at the beginning of the
scoped package name.*
```yaml
extends: '@andybarron/eslint-config'
```

## Development scripts
* `npm run generate` - Generate an empty list of all non-deprecated ESLint
  rules. **This *overwrites* the file `lib/rules.js`, so be careful!**
* `npm test` - Ensure that all ESLint rules exist in the preset and that
  all rules in the preset are valid and not deprecated.
* `npm run lint` - Run this linter preset on its own source code (i.e. the `lib`
  and `scripts` directories). *So meta!*
* `npm run format` - Same as `lint`, but attempt to fix lint errors as well.

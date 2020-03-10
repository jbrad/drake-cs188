# eslint-plugin-get-off-my-lawn

> Highly opinionated, [ESLint plugin](https://eslint.org/docs/developer-guide/working-with-plugins) with custom rules to produce beautiful, readable JavaScript.

![eslint-plugin-get-off-my-lawn](assets/logo.jpg)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn add eslint --dev
```

Next, install `eslint-plugin-get-off-my-lawn`:

```
$ yarn add eslint-plugin-get-off-my-lawn --dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-get-off-my-lawn` globally.

## Usage

Add `get-off-my-lawn` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["get-off-my-lawn"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "get-off-my-lawn/rule-name": 2
    }
}
```

## Supported Rules

*   [get-off-my-lawn/prefer-arrow-functions](docs/rules/prefer-arrow-functions): Prefer using arrow function over traditional functions.

## Related

*   [eslint-config-get-off-my-lawn](https://www.npmjs.com/package/eslint-config-get-off-my-lawn) - A highly opinionated, [sharable config](http://eslint.org/docs/developer-guide/shareable-configs.html) of [ESLint](http://eslint.org) rules to produce beautiful, readable JavaScript.
*   [stylelint-config-get-off-my-lawn](https://www.npmjs.com/package/stylelint-config-get-off-my-lawn) - A highly opinionated, [sharable config](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#extends) of [stylelint](http://stylelint.io) rules to produce beautiful, readable CSS and Sass.

## License

MIT © [Michael Novotny](http://manovotny.com)

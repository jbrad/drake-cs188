# Prefer using arrow functions (get-off-my-lawn/prefer-arrow-functions)

Arrow functions have a few benefits over their traditional function counterparts.

*   Scope safety (lexically scoped). When arrow functions are used consistently, everything is guaranteed to use the same `this` object as the root. If even a single standard function callback is mixed in with a bunch of arrow functions, there's a chance the scope will become messed up.
*   Definition safety. Creating arrow functions with `const` will ensure they are never able to be overridden.
*   Compactness. Arrow functions are typically easier to read and write and are less verbose. Arrow functions also allow for implicit returns.

This rule is also React friendly by default, which most other arrow function linters are not.

## Rule Details

The following patterns are considered warnings:

```js
function a() {
    return 'a';
}

const a = function() {
    return 'a';
};
```

These patterns would not be considered warnings:

```js
const a = () => 'a';
```

## When Not To Use It

If you don't want to be notified about the use of traditional functions or you don't mind mixed usage of traditional functions an arrow functions within the same codebase, you can safely disable this rule.

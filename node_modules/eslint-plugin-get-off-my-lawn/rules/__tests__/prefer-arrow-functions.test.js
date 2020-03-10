const RuleTester = require('eslint').RuleTester;

const rule = require('../prefer-arrow-functions');
const getDocsUrl = require('../utils/get-docs-url');

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6
    }
});
const message = 'Prefer using arrow function over traditional functions.';

ruleTester.run('rule', rule, {
    invalid: [
        {
            code: 'function a() { return "a" }',
            errors: [
                {
                    column: 1,
                    line: 1,
                    message
                }
            ]
        },
        {
            code: 'const a = function () { return "a" }',
            errors: [
                {
                    column: 11,
                    line: 1,
                    message
                }
            ]
        }
    ],
    valid: [
        'const a = () => "a"',
        'class A extends React.Component { render() {} }'
    ]
});

test('url', () => {
    expect(rule.meta.docs.url).toBe(
        getDocsUrl(__filename.replace('.test.js', '.js'))
    );
});

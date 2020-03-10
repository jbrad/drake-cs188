const pkg = require('../../../package');
const getDocsUrl = require('../get-docs-url');

jest.mock('../../../package', () => {
    const Chance = require('chance');
    const chance = new Chance();

    return {
        version: chance.semver()
    };
});

test('returns docs url', () => {
    const Chance = require('chance');
    const path = require('chance-path');
    const chance = new Chance();

    chance.mixin({
        path
    });

    const repositoryUrl =
        'https://github.com/manovotny/eslint-plugin-get-off-my-lawn';
    const ruleName = chance.word();
    const pathToFile = chance.path({
        ext: '.js',
        name: ruleName,
        root: true
    });
    const url = getDocsUrl(pathToFile);

    expect(url).toBe(
        `${repositoryUrl}/blob/v${pkg.version}/docs/rules/${ruleName}.md`
    );
});

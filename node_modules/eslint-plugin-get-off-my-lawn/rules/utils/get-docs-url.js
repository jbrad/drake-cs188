const path = require('path');
const pkg = require('../../package');

const repositoryUrl =
    'https://github.com/manovotny/eslint-plugin-get-off-my-lawn';

module.exports = (filename) => {
    const ruleName = path.basename(filename, '.js');

    return `${repositoryUrl}/blob/v${pkg.version}/docs/rules/${ruleName}.md`;
};

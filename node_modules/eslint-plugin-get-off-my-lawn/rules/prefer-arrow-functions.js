const dotProp = require('dot-prop');

const getDocsUrl = require('./utils/get-docs-url');

const message = 'Prefer using arrow function over traditional functions.';

const create = (context) => ({
    FunctionDeclaration: (node) => {
        context.report({
            message,
            node
        });
    },
    FunctionExpression: (node) => {
        const nodeParentType = dotProp.get(
            node,
            'parent.parent.type',
            undefined
        );
        const isFunctionPartOfAClass = nodeParentType === 'ClassBody';

        if (!isFunctionPartOfAClass) {
            context.report({
                message,
                node
            });
        }
    }
});

module.exports = {
    create,
    meta: {
        docs: {
            url: getDocsUrl(__filename)
        }
    }
};

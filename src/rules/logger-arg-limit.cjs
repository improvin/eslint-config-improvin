/**
 * ESLint rule to enforce that logger methods (error, warn, info, debug, log)
 * can only have at most 2 arguments.
 * If more data needs to be logged, combine it into the second object parameter.
 */

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Enforce that logger methods can only have at most 2 arguments',
    },
    fixable: null,
    schema: [],
    messages: {
      tooManyArgs:
        'logger.{{method}}() can only have at most 2 arguments. If you need to log more data, combine it into the second object parameter.',
    },
  },
  create(context) {
    const LOGGER_METHODS = ['error', 'warn', 'info', 'debug', 'log'];

    return {
      CallExpression(node) {
        // Check if this is a member expression call (e.g., logger.error(...))
        if (
          node.callee.type === 'MemberExpression' &&
          node.callee.object.type === 'Identifier' &&
          node.callee.object.name === 'logger' &&
          node.callee.property.type === 'Identifier'
        ) {
          const methodName = node.callee.property.name;

          // Check if it's one of the logger methods we care about
          if (LOGGER_METHODS.includes(methodName)) {
            // Check if there are more than 2 arguments
            if (node.arguments.length > 2) {
              context.report({
                node,
                messageId: 'tooManyArgs',
                data: {
                  method: methodName,
                },
              });
            }
          }
        }
      },
    };
  },
};

"use strict"
module.exports = {
    CallExpression(path) {
        if (path.node.callee.property.name === 'log') {
            var description = []
            for (let expression of path.node.arguments) {
                description.push(code.substring(expression.start, expression.end))
            }
            path.node.arguments.unshift(t.stringLiteral(description.join(',')))
        }
    }
}
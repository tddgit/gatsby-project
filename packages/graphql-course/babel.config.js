const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-proposal-private-property-in-object',
    '@babel/plugin-proposal-throw-expressions',
    [
        '@babel/plugin-proposal-pipeline-operator',
        { proposal: 'minimal' },
    ],
    '@babel/plugin-proposal-partial-application',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-logical-assignment-operators',
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-do-expressions',
    // '@babel/plugin-proposal-decorators', TODO: // decoratorsBeforeExport: false
    '@babel/plugin-proposal-class-static-block',

    '@babel/plugin-transform-runtime',
];
const isDevelopment = process.env.NODE_ENV !== 'production';

if (!isDevelopment) {
    plugins.push('transform-remove-debugger');
    plugins.push([
        'transform-remove-console',
        { exclude: ['error', 'warn'] },
    ]);
} else {
    plugins.push([
        'react-refresh/babel',
        { skipEnvCheck: true },
    ]);
}

module.exports = {
    presets: [
        '@babel/preset-env',
        //
        '@babel/preset-typescript',
        //
        ['@babel/preset-react', { runtime: 'automatic' }],
        'babel-preset-gatsby',
        {
            targets: {
                browsers: ['>1%', 'not dead'],
            },
        },
    ],
    plugins,
};

const express = require('express');

const expressGraphQL = require('express-graphql')
    .graphqlHTTP;

const app = express();

const schema = require('./schema/schema.js');

app.use(
    '/graphql',
    expressGraphQL({
        schema,
        graphiql: true,
    }),
);

app.listen(4001, () => {
    console.log('Linstening on port 4001');
});

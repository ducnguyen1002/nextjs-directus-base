import { createDirectus, graphql } from '@directus/sdk';

const client = createDirectus('http://directus.example.com').with(graphql());
const fnQuery = async (query, scope = "items") => {
    try {
        const response = await client.query(query, {}, scope);
        if (response.errors) throw new Error(response.errors[0].message);
        return response.data;
    } catch (error) {
        console.log(`Error(s) in fnQuery`, error);
    }
};

export { client, fnQuery }
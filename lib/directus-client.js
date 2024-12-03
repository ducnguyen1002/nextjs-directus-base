import { createDirectus, graphql } from '@directus/sdk';

export const client = createDirectus('http://directus.example.com').with(graphql());
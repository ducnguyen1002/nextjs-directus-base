import { fnQuery } from "@/lib/directus-client";

export const getAllPosts = async (limit = 10, sort = "title", order = "desc") => {
    const query = `
        query {
            posts (
                limit: ${limit},
                sort: ${sort},
                order: ${order},
            ) {
                id
                title
            }
        }
    `;
    return await fnQuery(query, "items");
}; 
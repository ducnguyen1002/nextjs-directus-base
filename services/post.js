import { client } from "@/lib/directus-client"

export const getAllPosts = async (limit = 10, sort = "title", order = "desc") => {
    try {
        const response = await client.query(`
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
        `)

        if (response.errors) {
            throw new Error(response.errors[0].message)
        }

        return response
    } catch (error) {
        console.log(`Error(s) in ${this}`, error);

    }
}
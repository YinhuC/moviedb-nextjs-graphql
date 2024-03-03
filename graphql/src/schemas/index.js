export const typeDefs = `#graphql

    # main type defs
    type Movie {
        id: ID!,
        title: String!,
        platform: [String]!
    }
    type Review {
        id: ID!,
        rating: Int!,
        content: String!
    }
    type User {
        id: ID!,
        name: String!,
        verified: Boolean!
    }

    # entry points into graph
    type Query {
        movies: [Movie],
        movie(id: ID!): Movie
        reviews: [Review],
        review(id: ID!): Review
        users: [User]
        user(id: ID!): User
    }

    # related data from entry point
    type Movie {
        reviews: [Review]
    }
    type User {
        reviews: [Review]
    }
    type Review {
        user: User!,
        movie: Movie!
    }
`;

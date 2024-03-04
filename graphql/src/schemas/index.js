export const typeDefs = `#graphql

    # main type defs
    type Movie {
        id: ID!
        title: String!
        platform: [String]!
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type User {
        id: ID!
        name: String!
        verified: Boolean!
    }

    # entry points into graph
    type Query {
        movies: [Movie]
        movie(id: ID!): Movie
        reviews: [Review]
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
        user: User!
        movie: Movie!
    }

    # mutations to alter data
    type Mutation {
        # add
        addMovie(movie: AddMovieInput!): Movie
        addUser(user: AddUserInput!): User
        addReview(review: AddReviewInput!): Review

        # delete
        deleteMovie(id: ID!): DeleteResult
        deleteUser(id: ID!): DeleteResult
        deleteReview(id: ID!): DeleteResult

        # update
        updateMovie(id: ID!, movie: UpdateMovieInput!): Movie
        updateUser(id: ID!, user: UpdateUserInput!): User
        updateReview(id: ID!, review: UpdateReviewInput!): Review
    }

    # mutation inputs
    input AddMovieInput {
        title: String!
        platform: [String!]!
    }
    input AddUserInput {
        name: String!
        verified: Boolean!
    }
    input AddReviewInput {
        rating: Int!
        content: String!
    }
    input UpdateMovieInput {
        title: String
        platform: [String!]
    }
    input UpdateUserInput {
        name: String
        verified: Boolean
    }
    input UpdateReviewInput {
        rating: Int
        content: String!
    }

    # mutation results
    type DeleteResult {
        success: Boolean
    }
`;

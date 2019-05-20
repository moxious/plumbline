export const typeDefs = `
type User {
  id: ID!
  name: String
  posts: [Post] @relation(name: "POSTED", direction: "OUT")
}

type Post {
  id: ID!
  name: String
  content: String
  posted_by: User @relation(name: "POSTED", direction: "IN")
}
`;

export const resolvers = { };

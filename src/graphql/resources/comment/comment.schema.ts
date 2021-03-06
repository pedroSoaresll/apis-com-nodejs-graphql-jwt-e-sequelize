const commentType = `
  type Comment {
    id: ID!
    comment: String!
    createAt: String!
    updatedAt: String!
    user: User!
    post: Post!
  }
  
  input CommentInput {
    comment: String!
    post: Int!
    user: Int!
  }
`

const commentQueries = `
  commentsByPost(post: ID!, first: Int, offset: Int): [Comment!]!
`

const commentMutation = `
  createComment(input: CommentInput): Comment
  updateComment(id: ID!, input: CommentInput): Comment
  deleteComment(id: ID!): Boolean
`

export { commentMutation, commentQueries, commentType }
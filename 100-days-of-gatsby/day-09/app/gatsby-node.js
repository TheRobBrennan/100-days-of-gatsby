// This onCreateNode function will be called by Gatsby whenever a new node is created (or updated).
exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}
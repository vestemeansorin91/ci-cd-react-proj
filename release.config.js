module.exports = {
  branches: ["master"],
  repositoryUrl: "https://github.com/vestemeansorin91/ci-cd-react-proj",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};

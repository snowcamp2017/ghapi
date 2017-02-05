const GitHubClient = require('./octocat.js').GitHubClient;

let githubCli = new GitHubClient({
  baseUri:  `https://api.github.com`,
  token:    process.env.TOKEN_GITHUB
});

let handle = "k33g";

githubCli.getData({path:`/users/${handle}`})
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("error", error)
  });

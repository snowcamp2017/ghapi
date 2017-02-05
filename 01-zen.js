const GitHubClient = require('./octocat.js').GitHubClient;

/* run it:
TOKEN_GITHUB=0f8e27b7dcaa34e671ed4ed4369b54ce60d5fe27 node 01-zen.js
*/

let githubCli = new GitHubClient({
  baseUri:  `https://api.github.com`,
  token:    process.env.TOKEN_GITHUB
});

githubCli.getText({path:'/octocat'})
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("error", error)
  });

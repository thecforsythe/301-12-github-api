const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const requestProxy = require('express-request-proxy');

const githubToken = process.env.GITHUB_TOKEN || '1cfe71a7ad14ee3e5872adefe24a63d7cd0c2347';

function proxyGitHub(request, response){
  console.log(`Routing GitHub request for ${request.params[0]}`);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: { Authorization: `token ${githubToken}`}
  }))(request, response);
}

app.use(express.static('./public'));

app.get('/github/*', proxyGitHub);

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

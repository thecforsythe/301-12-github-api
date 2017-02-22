// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

$.ajax({
  url: 'https://api.github.com/user/repos',
  method: 'GET',
  headers: {
	   Authorization: `token ${githubToken}`}
})
.then(data => {
  console.log(data);
  data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`));
},
  err => {
    console.error('Status Code: ', err.status);
  });

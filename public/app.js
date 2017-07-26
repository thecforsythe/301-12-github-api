'use strict';

// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

$.ajax({

  url: '/github/user/repos',
  method: 'GET',

})
.then(
  // render the data
  data => {
    data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`))
  }
);

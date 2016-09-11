import request from 'request'

let GitHubFetcher = {
  getUserDetails: (username) => {
    let url = 'https://api.github.com/users/' + username
    console.log(url)
    request({
      url: 'https://api.github.com/users/' + username,
      headers: {
        'User-Agent': 'request'
      }
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        return JSON.parse(body)
      }
    })

  },
  searchUsers: (options) => {
    return {}
  }
}

module.exports = GitHubFetcher

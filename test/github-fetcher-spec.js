import {expect} from 'chai'

const GitHubFetcher = require('../github-fetcher')

describe('GitHubFetcher', () => {
  it('should exist', () => {
    expect(GitHubFetcher).to.be.defined
  })
})

describe('get user details', () => {
  it('should return object of user details', () => {
    let input = 'rizafahmi',
      actual = GitHubFetcher.getUserDetails(input),
      expected = {
      login: "rizafahmi",
      id: 1147918,
      avatar_url: "https://avatars.githubusercontent.com/u/1147918?v=3",
      gravatar_id: "",
      url: "https://api.github.com/users/rizafahmi",
      html_url: "https://github.com/rizafahmi",
      followers_url: "https://api.github.com/users/rizafahmi/followers",
      following_url: "https://api.github.com/users/rizafahmi/following{/other_user}",
      gists_url: "https://api.github.com/users/rizafahmi/gists{/gist_id}",
      starred_url: "https://api.github.com/users/rizafahmi/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/rizafahmi/subscriptions",
      organizations_url: "https://api.github.com/users/rizafahmi/orgs",
      repos_url: "https://api.github.com/users/rizafahmi/repos",
      events_url: "https://api.github.com/users/rizafahmi/events{/privacy}",
      received_events_url: "https://api.github.com/users/rizafahmi/received_events",
      type: "User",
      site_admin: false,
      name: "Riza Fahmi",
      company: "Hacktiv8",
      blog: "https://hacktiv8.com",
      location: "Jakarta",
      email: "rizafahmi@gmail.com",
      hireable: true,
      bio: "Curriculum Director at @hacktiv8 ",
      public_repos: 136,
      public_gists: 6,
      followers: 37,
      following: 11,
      created_at: "2011-10-24T10:34:43Z",
      updated_at: "2016-09-05T15:39:54Z"
    }

    expect(actual).to.deep.equal(expected)
  })
})

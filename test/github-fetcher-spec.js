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

    // Second test
    input = 'mhaidarh'
    expected = {
      login: "mhaidarh",
      id: 235584,
      avatar_url: "https://avatars.githubusercontent.com/u/235584?v=3",
      gravatar_id: "",
      url: "https://api.github.com/users/mhaidarh",
      html_url: "https://github.com/mhaidarh",
      followers_url: "https://api.github.com/users/mhaidarh/followers",
      following_url: "https://api.github.com/users/mhaidarh/following{/other_user}",
      gists_url: "https://api.github.com/users/mhaidarh/gists{/gist_id}",
      starred_url: "https://api.github.com/users/mhaidarh/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mhaidarh/subscriptions",
      organizations_url: "https://api.github.com/users/mhaidarh/orgs",
      repos_url: "https://api.github.com/users/mhaidarh/repos",
      events_url: "https://api.github.com/users/mhaidarh/events{/privacy}",
      received_events_url: "https://api.github.com/users/mhaidarh/received_events",
      type: "User",
      site_admin: false,
      name: "M Haidar Hanif",
      company: "@Hazeorid & @Hacktiv8",
      blog: "http://mhaidarhanif.com",
      location: "Earth",
      email: "git@mhaidarhanif.com",
      hireable: true,
      bio: "To optimize people actions, so that humanity can grow and thrive for good ⚡",
      public_repos: 54,
      public_gists: 6,
      followers: 109,
      following: 872,
      created_at: "2010-04-02T09:27:05Z",
      updated_at: "2016-08-30T04:24:00Z"
    }
    actual = GitHubFetcher.getUserDetails(input)

    expect(actual).to.deep.equal(expected)

    // Third test
    input = 'rubicode'
    expected = {
      login: "rubicode",
      id: 12389910,
      avatar_url: "https://avatars.githubusercontent.com/u/12389910?v=3",
      gravatar_id: "",
      url: "https://api.github.com/users/rubicode",
      html_url: "https://github.com/rubicode",
      followers_url: "https://api.github.com/users/rubicode/followers",
      following_url: "https://api.github.com/users/rubicode/following{/other_user}",
      gists_url: "https://api.github.com/users/rubicode/gists{/gist_id}",
      starred_url: "https://api.github.com/users/rubicode/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/rubicode/subscriptions",
      organizations_url: "https://api.github.com/users/rubicode/orgs",
      repos_url: "https://api.github.com/users/rubicode/repos",
      events_url: "https://api.github.com/users/rubicode/events{/privacy}",
      received_events_url: "https://api.github.com/users/rubicode/received_events",
      type: "User",
      site_admin: false,
      name: "Rubi Henjaya",
      company: null,
      blog: null,
      location: null,
      email: "rubi.henjaya@gmail.com",
      hireable: null,
      bio: null,
      public_repos: 3,
      public_gists: 0,
      followers: 1,
      following: 0,
      created_at: "2015-05-11T06:30:26Z",
      updated_at: "2016-09-01T11:47:48Z"
    }

    actual = GitHubFetcher.getUserDetails(input)
    expect(actual).to.deep.equal(expected)
  })
})

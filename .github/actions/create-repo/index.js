const core = require('@actions/core')
const github = require('@actions/github')

try {
  github.repos.createForAuthenticatedUser({
    name: 'hectors-test'
  })
} catch (error) {
  core.setFailed(error.message)
}

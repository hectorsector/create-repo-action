const core = require('@actions/core')
const github = require('@actions/github')

const token = core.getInput("github-token")
const octokit = github.getOctokit(token)

async function run() {
  try {
    await octokit.repos.createForAuthenticatedUser({
      name: 'hectors-test'
    })
  } catch (error) {
    core.setFailed(error.message)
  }  
}

run()
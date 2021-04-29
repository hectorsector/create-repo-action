const core = require('@actions/core')
const github = require('@actions/github')

const token = core.getInput("github-token")
const deploy_key = core.getInput("repo-deploy-key")
const target_owner = core.getInput("repo-owner")
const target_repo = core.getInput("repo-name")
const targetOctokit = github.getOctokit(deploy_key)
const octokit = github.getOctokit(token)

async function run() {
  try {
    await targetOctokit.git.updateRef({
      owner: target_owner,
      repo: target_repo,
      ref: 'main',
      sha: github.context.sha,
      force: true
    })} catch (error) {
    core.setFailed(error.message)
  }  
}

run()
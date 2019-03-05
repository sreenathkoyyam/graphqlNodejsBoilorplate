/* const GitHubApi = require('@octokit/rest');
const config = require('config');
const https = require('https');

const createGithubClient = async options => {
	const configGitUri = config.get('gitUri');
	const baseUrl = `https://${configGitUri.GitHubApiUrl}:443${configGitUri.pathPrefix}`;
	const github = new GitHubApi({
		baseUrl,
		debug: false,
		timeout: 5000,
		agent: new https.Agent({
			rejectUnauthorized: true
		})
	});
	github.authenticate(options);
	return github;
};

module.exports = { createGithubClient };

*/

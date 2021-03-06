module.exports = {
  apps: [{
    name: 'i0',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-215-251-17.us-west-1.compute.amazonaws.com',
      key: '~/60/sandbox/config/iteration0.pem',
      ref: 'origin/master',
      repo: 'git@github.com:mikehern/pm2test.git',
      path: '/home/ubuntu/test/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}

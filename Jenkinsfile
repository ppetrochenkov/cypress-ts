docker volume create jenkins-data
docker volume create npm-cache
docker volume create cypress-cache

docker run -u root --name blue-ocean -p 8080 -v jenkins-data:/var/jenkins_home -v npm-cache:/root/.npm -v cypress-cache:/root/.cache -v /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean:latest


pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Cypress tests') {
            steps {
                sh 'ls -la node_modules'
                sh 'npm run test'
            }
        }
    }
}


docker volume create jenkins-data
docker volume create npm-cache
docker volume create cypress-cache

docker run \
  -u root \
  --name blue-ocean \
  -p 8080:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v npm-cache:/root/.npm \
  -v cypress-cache:/root/.cache \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkinsci/blueocean:latest

docker logs blue-ocean

pipeline {
  agent {
    docker {
      image 'cypress/base:20.9.0'
    }
  }

  stages {
  stage('build') {
        steps {
          echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
          sh 'npm ci'
          sh 'npm run cy:verify'
        }
      }

    stage('build and test') {
      steps {
        sh "npm run test"
      }
    }

  }
}
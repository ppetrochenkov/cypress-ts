pipeline {
  agent {
    docker {
      image 'cypress/base:20.9.0'
    }
  }

  stages {
    stage('build and test') {
      environment {
      }

      steps {
        sh 'npm ci'
        sh "npm run test"
      }
    }
  }
}
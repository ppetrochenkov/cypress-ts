pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Cypress tests') {
            steps {
                sh 'node --version'
                sh 'ls -la'
                sh 'ls -la node_modules'
                sh 'npm run test'
            }
        }
    }
}

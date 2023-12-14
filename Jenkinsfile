pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Build dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx cypress verify'
            }
        }
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

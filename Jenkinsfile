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

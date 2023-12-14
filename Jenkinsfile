pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Build dependencies') {
            steps {
                sh 'npm ci'
                sh 'npm run cypress:verify'
            }
        }
        stage('Cypress tests') {
            steps {
                sh 'npm run cypress:test'
            }
        }
    }
}

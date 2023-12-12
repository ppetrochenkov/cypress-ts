pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Cypress tests') {
            steps {
                sh 'sleep 300'
                sh 'npm run test'
            }
        }
    }
}

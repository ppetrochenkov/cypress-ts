pipeline {
    agent {
        dockerfile {
           reuseNode true
        }
    }
    stages {
        stage('Cypress tests') {
            steps {
                sh 'sleep 120'
                sh 'npm run test'
            }
        }
    }
}

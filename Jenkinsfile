pipeline {
    agent {
        docker {
            image 'cypress/included:13.6.1'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'node --version'
                sh 'npm ci'
            }
        }
        stage('Run Tests') {
            steps {
                echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
                sh 'npm run test'
            }
        }
    }
    post {
        always {
            junit 'cypress/results/*.xml'
        }
    }
}

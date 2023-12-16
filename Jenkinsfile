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
        stage('Cypress parallel tests') {
            environment {
                CYPRESS_trashAssetsBeforeRuns = 'false'
            }
            parallel {
                stage('1-st Thread') {
                    steps {
                        sh "npm run cypress:test -- --env split=2,splitIndex=0"
                    }
                }
                stage('2-nd Thread') {
                    steps {
                        sh "npm run cypress:test -- --env split=2,splitIndex=1"
                    }
                }
            }
        }
    }
}

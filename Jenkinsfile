pipeline {

  agent {
    docker {
      image 'cypress/included:13.6.1'
    }
  }

  stages {

    stage('cypress test') {
      steps {
        echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
        sh "docker run -it -v $PWD:/e2e -w /e2e --name cypress_cli --rm cypress/included:13.6.1 -b chrome"
      }
    }

  }
}
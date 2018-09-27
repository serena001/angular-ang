node {

  stage('example'){
    parallel firstBranch: {
            echo "ll something"
            checkout scm
        }, secondBranch: {
        echo "dok sometjing"
        checkout scm
        },
        failFast: true|false
  }
}
node{

    script {
        System.setProperty("org.jenkinsci.plugins.durabletask.BourneShellScript.HEARTBEAT_CHECK_INTERVAL", "8000");
    }
      stage('Git Repository'){
            git branch:'master',
            credentialsId:'serena001e78e32e3bab14b50b22e8666d664e021',
            url:'https://github.com/serena001/angular-ang.git'
       }
       stage('Node and npm install'){
           def imageName = 'smkm001/node'
           def dockerFileDir = '.'
        def customImage=docker.build("${imageName}","${dockerFileDir}")
         withDockerContainer(args: "-u root", image: "${imageName}") {
            sh "npm install"
            sh 'npm install -g @angular/cli'
            sh 'ng build --prod  --output-path=dist/angularAppNodeInstall/fr/ --index=src/fr/index.html --deploy-url=./'
            sh 'ng build --prod  --output-path=dist/angularAppNodeInstall/en/ --index=src/en/index.html --deploy-url=./'

          }
       }
}

@Library('deployment') _
def archiveArtifactConfig;
def emailConfig;

pipeline{
	agent any
	triggers
	{
		cron('H */4 * * 1-5')
	}
	options
	{
		disableConcurrentBuilds()
	}
	stages
	{
		stage('Setup Configuration parameters to be used by the pipeline')
		{
			steps
			{
				script
				{
           env.NODEJS_HOME = "${tool 'nodeJS10'}"
            env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
				    deploymentConfig=readJSON(file:"src/main/resources/deploymentConfig.json")
            archiveArtifactConfig=deploymentConfig.archiveArtifact
            emailConfig=deploymentConfig.email
				}
			}
		}
    stage('Package and Build the application')
		{
			steps
			{
				script
				{
            sh "npm install"
            sh 'npm install -g @angular/cli'
            sh 'ng build --prod  --output-path=dist/angularAppNodeInstall/fr/ --index=src/fr/index.html --deploy-url=./'
            sh 'ng build --prod  --output-path=dist/angularAppNodeInstall/en/ --index=src/en/index.html --deploy-url=./'

				}
			}
		}
    stage('Publish to NPM Repository')
		{
			steps
			{
				script
				{
          sh "npm publish --registry http://localhost:4873"
				}
			}
		}
    stage('Deploy package to Docker')
		{
			steps
			{
				script
				{
            def imageName = "smkm001/angularang:${env.BUILD_ID}"
            def dockerFileDir = './'
            def customImage=docker.build("${imageName}","${dockerFileDir}")
            customImage.push()
            sh "docker rmi ${imageName}"
				}
			}
		}
	}
	post{
		aborted
		{
			echo "Process was aborted"
			script{
				echo "Process was aborted"
				deployment.sendEmail(emailConfig)
			}
			
		}
		success{
			echo "Process is successful"
			script{
				echo "Process is successful"
				deployment.sendEmail(emailConfig)
				deployment.archiveArtifact(archiveConfig)
			}
		}
		unstable{
			echo "Process is unstable"
			script{
				echo "Process is unstable"
				deployment.sendEmail(emailConfig)
			}
		}
		failure{
			echo "Process failed"
			script{
				echo "Process failed"
				//Send failure email using template
				deployment.sendEmail(emailConfig)
			}
		}
		
	}

}
	
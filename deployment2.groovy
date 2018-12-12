#!/usr/bin/env groovy

def artifactoryDeployResolveConfig(artfactoryServer,artifactoryDeployMap,mavenBuild)
{
	env.MAVEN_HOME = "${tool 'maven'}"
	def deployer = [	server: artfactoryServer, releaseRepo: artifactoryDeployMap.releaseLibDep, snapshotRepo: artifactoryDeployMap.snapshotLibDep]
//	def resolver = [server: artfactoryServer, releaseRepo: artifactoryDeployMap.releaseLibRes, snapshotRepo: artifactoryDeployMap.snapshotLibRes]
//	mavenBuild.resolver resolver
	mavenBuild.deployer deployer
	return mavenBuild
}

def artifactoryPromote(artifactoryPromotionMap,projectBuildInfo)
{
	def promotionConfigs=[
	"buildName":projectBuildInfo.buildName,
	"buildNumber":projectBuildInfo.buildNumber,
	"targetRepo":artifactoryPromotionMap.targetRepo,
	"sourceRepo":artifactoryPromotionMap.sourceRepo,
	"status":artifactoryPromotionMap.status,
	"copy":artifactoryPromotionMap.copy,
	"failFast":artifactoryPromotionMap.failFast]
	return promotionConfigs
}

def createArtifactoryInstance()
{
	def artifactoryServer = Artifactory.server("artifactory")
	return artifactoryServer
}

def createMavenBuildInstance()
{
	env.MAVEN_HOME = "${tool 'maven'}"
	def mavenBuild = Artifactory.newMavenBuild()
	return mavenBuild
}

def archiveArtifact(archiveArtifactConfig)
{
	def artifacts = [artifacts: archiveArtifactConfig.archiveSrc, fingerprint:archiveArtifactConfig.fingerprint, OnlyIfSuccessful:archiveArtifactConfig.OnlyIfSuccessful]
	archiveArtifacts artifacts
}

def sendEmail(emailConfig)
{
	def emailExtMap = [subject:emailConfig.subject, to:emailConfig.to, body:emailConfig.body, from:emailConfig.from, mimeType:emailConfig.mimeType]
	emailext emailExtMap
}

def buildMaven(mavenBuild,pomFileName,goals)
{
	def projectBuildInfo=mavenBuild.run pom:pomFileName,goals:goals
	return projectBuildInfo
}

def artifactoryPromoteInteractive(artfactoryServer,artifactoryPromote,displayName)
{
	def addInteractivePromotionMap = [server: artfactoryServer, promotionConfig:artifactoryPromote, displayName:displayName]	
	Artifactory.addInteractivePromotion addInteractivePromotionMap
}

def updatePOMVersionNumber(versionNumber)
{
	versionNumber = versionNumber.replace("-SNAPSHOT","")
	def lastIndex = versionNumber.lastIndexOf(".")
	def lastDigit = versionNumber.substring(lastIndex+1,versionNumber.length())
	def versionNumberMinusLastDigit = versionNumber.substring(0,lastIndex+1)
	try
	{
		def lastDigitInt = Integer.parseInt(lastDigit) +1
		return versionNumberMinusLastDigit + lastDigitInt 
	}
	catch(err)
	{
		println "error occurred"
	}
}

def retrieveVersionNumber(filename)
{
	//def text = new XmlSlurper().parseText(file.readToString())
	//def version = text.project.version.text()
	def pom = readMavenPom file:filename
	def version = pom.version
	version = version.replace("-SNAPSHOT","")
	return version
}

def retrieveConfigFile(filename)
{
	//def project = build.getProject()
	//def workspace=project.getWorkspace()
	//def file = workspace.child(filename)
	//return file
}

def isSNAPSHOT(versionNumber)
{
	def isSnapshot = "yes"
	def index = versionNumber.versionNumber.lastIndexOf("SNAPSHOT")
	if(index==-1)
	{
		isSnapshot="no"
	}
	return isSnapshot
}
def isEXIST(searchString,searchValue)
{
	def isExist="yes"
	def index = searchString.indexOf(searchValue)
	if(index!=-1)
	{
		isExist="no"
	}
	return isExist
}
return this;

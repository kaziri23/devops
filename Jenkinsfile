node {
	def app
	#stage('Initialize') {
	#	def dockerHome = tool 'MyDocker'
	#	env.PATH = "${dockerHome}/bin:${env.PATH}"
	#}

	stage('Clone Repository') {
		checkout scm
	}

	stage('Build image') {
		app = docker.build("kaziri23/devops")
	}
	stage("Test image") {
		app.inside {
			sh 'echo "All Tests passed"'
		}
	}
	stage('Push Image') {
		docker.withRegistry('https://harborlab.mdlwr.se', 'docker-hub-credentials') {
			app.push("${env.BUILD_NUMBER}")
			app.push("latest")
		}
	}
}

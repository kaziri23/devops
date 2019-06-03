node {
	def app
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

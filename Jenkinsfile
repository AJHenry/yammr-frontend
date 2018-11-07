pipeline {
    agent {
        docker { image 'node:10' }
    }
    stages {
        stage('Pre-Build') {
            steps {
                sh 'mv .env.ci .env'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}

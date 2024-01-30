pipeline {
    agent any

    stages {
        stage('Checkout code') {
            steps {
                git url: 'https://github.com/klp05/cypress_Auto', branch: 'main' // Replace 'main' with your default branch
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install' // Replace with your command if different
            }
        }

        stage('Run Cypress tests') {
            steps {
                sh 'npx cypress run' // Replace with your command if different
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/test-results/**/*.json' // Adjust path as needed
        }
    }
}

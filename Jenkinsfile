pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git changelog: false, poll: false, url: 'https://github.com/ayushsoni77/Jenkinss.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install selenium-webdriver'  // Install selenium WebDriver
            }
        }
        stage('Run Selenium Tests') {
            steps {
                sh 'node selenium_test.js'  // Run your Selenium test script
            }
        }
        stage('Deploy') {
            steps {
                sh 'cp -r * /var/www/html/'  // Deploy your files to Nginx
                sh 'sudo systemctl restart nginx'  // Restart Nginx to apply changes
            }
        }
    }
    post {
        always {
            echo 'Pipeline complete'
        }
        success {
            echo 'Deployment and testing successful!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}


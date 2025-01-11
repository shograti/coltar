pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "coltar"  

        VPS_USER = "root"  

        VPS_HOST = "212.227.80.166"  

        SSH_KEY = credentials('95c57288-c29b-4ffa-9a8b-106bec5911fc')
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/shograti/coltar.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE, '.')
                }
            }
        }

stage('Deploy to VPS') {
    steps {
        sshagent([SSH_KEY]) {
            script {
                sh """
                # SSH into your VPS and create the directory if it doesn't exist
                ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} 'mkdir -p ../home/coltar'

                # Copy the project files from Jenkins to the VPS
                scp -o StrictHostKeyChecking=no -r . ${VPS_USER}@${VPS_HOST}:../home/coltar

                # SSH into your VPS and deploy the Docker containers using docker-compose
                ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} << EOF
                # Navigate to the directory containing docker-compose.yml on your VPS
                cd ../home/coltar

                # Stop and remove any existing containers
                docker-compose down

                # Start the containers using docker-compose
                docker-compose up -d
                EOF
                """
            }
        }
    }
}

    }

    post {
        always {
            cleanWs()
        }
    }
}

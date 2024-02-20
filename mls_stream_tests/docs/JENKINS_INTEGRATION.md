# Jenkins Integration

To integrate this Dockerized setup into Jenkins:

### Install Docker Plugin:

Install the "Docker" plugin in Jenkins.
Configure Docker in Jenkins:

### Configuring Jenkins
Go to "Manage Jenkins" > "Configure System."
In the "Cloud" section, add Docker as a new cloud provider and configure it.
Configure Jenkins Job:

### Running the Jenkins Job
In your Jenkins job configuration, add a build step to build and run the Docker container.
You may need to configure Jenkins to communicate with the Docker daemon.
Run the Jenkins Job:

### Saving the Jenkins Job Config
Save the Jenkins job configuration.
Run the job to trigger the Docker container execution.

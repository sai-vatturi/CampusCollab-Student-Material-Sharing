
# CampusCollab - Student Material Sharing

## Introduction

**CampusCollab** is a web-based platform designed to enable students from various universities to easily access and share educational materials related to their curriculum. This includes syllabi, textbooks, lecture notes, exam papers, and other relevant study materials. The platform is built to foster collaboration and resource sharing among students, facilitating a more enriched learning experience.

![FotoJet](https://github.com/user-attachments/assets/2890fceb-474e-4ca9-9a85-eaa3519a7554)

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Contact](#contact)



### Purpose
The purpose of this project is to create a centralized hub where university students can upload, download, and manage academic materials. The platform is designed to be scalable, user-friendly, and accessible across various devices, ensuring that students can easily find and share resources.

### Scope
CampusCollab focuses on creating an inclusive environment where students from different universities can interact and share materials. It features user registration and authentication, advanced search capabilities, material upload and download, user feedback systems, and administrative moderation tools.

## Features
- **User Registration and Authentication:** Secure sign-up/login mechanisms for students, faculty, and administrators.
- **Advanced Search Capabilities:** Search by university, semester, course, and document type.
- **Material Upload and Download:** Easy upload and download of study materials.
- **Course and Material Management:** Admin and faculty tools for managing course materials.
- **Feedback and Rating System:** Users can rate and provide feedback on materials.
- **Responsive Design:** Accessible on both mobile and desktop devices.

## Installation

### Prerequisites
- **Node.js**: v14.x or higher
- **npm**: v6.x or higher
- **MySQL**: v5.7 or higher
- **Git**: Latest version

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/sai-vatturi/CampusCollab-Student-Material-Sharing.git
   cd CampusCollab-Student-Material-Sharing
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Create a MySQL database.
   - Run the provided SQL scripts located in the `/db` directory to set up the necessary tables.

4. Configure the environment variables:
   - Copy `.env.example` to `.env` and fill in your database and other configuration details.

5. Run the application:
   ```bash
   npm run dev
   ```

6. Access the application:
   - Open your browser and go to `http://localhost:3000`.

## Usage

### User Interface
- **Homepage:** Access all features from the homepage, including searching for materials, uploading files, and viewing user profiles.
- **Search:** Use the advanced search to filter materials by university, course, semester, and type.
- **Upload:** Easily upload materials with metadata and share them with the community.
- **Profile Management:** Customize your profile, manage your uploads, and track your download history.


## Contributing
We welcome contributions from the community! Please fork the repository and submit a pull request for any changes you'd like to make.

### Steps to Contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## Contact
For any queries or feedback, feel free to reach out:
- **Sai Vatturi** - sai.vatturi@example.com

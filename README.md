# ContentCraft.ai

## For Colab Access: 
  https://colab.research.google.com/drive/17QNRu9iTm0SdE0I8_xJYDoZahQnalZqF


## Overview
ContentCraft.ai is an AI-powered content generation platform designed to create engaging content for social media platforms like LinkedIn, Instagram, and Twitter. It leverages a fine-tuned GPT-2 model to tailor content according to the specific audience and purpose of each platform, enhancing user engagement and optimizing content creation efficiency.

## Features
Platform-Specific Content: Generates tailored content for LinkedIn, Instagram, and Twitter.
Custom Dataset: Fine-tuned GPT-2 model on a custom dataset for high-quality text generation.
NestJS Backend: Robust backend services with JWT authentication and role-based authorization.
ReactJS Frontend: User-friendly interface for seamless interaction.
Flask API: Hosts the ML model ensuring smooth content generation.

## Technologies Used
Backend: NestJS, Flask
Frontend: ReactJS
Machine Learning: GPT-2, Custom Dataset
Authentication: JWT, Role-Based Authorization
Database: MongoDB (or SQL/NoSQL as per implementation)
APIs: RESTful API

## Getting Started
Prerequisites
Node.js
npm or yarn
Python (for Flask)
MongoDB (or your preferred database)
Transformers, Torch, Accelerate, Pandas (for ML model training)

## Installation
Clone the Repository

bash
Copy code
git clone https://github.com/your_username/contentcraft-ai.git
cd contentcraft-ai
ML Model Setup

### Install Python Dependencies

bash
Copy code
pip install transformers torch accelerate pandas flask
Train the GPT-2 Model

bash
Copy code
Ensure your custom dataset is in the specified directory
python content_generation_model.py  ---This will create a model pickle file
Run the Flask API

bash
Copy code
Navigate to the backend directory
cd ../backend

Install dependencies
npm install

Set up environment variables
cp .env.example .env

### Run the backend server
npm run start:dev  ---This will run the NestJS server on port 3001

### Frontend Setup (ReactJS)
bash
Copy code
Navigate to the frontend directory
cd ../frontend

Install dependencies
npm install

Set up environment variables
cp .env.example .env

### Run the frontend server
npm run start  ---This will run the ReactJS server on port 3000

## Usage
Access the Application
Open your browser and navigate to http://localhost:3000 to access the ContentCraft.ai frontend.

## Generate Content

Sign up or log in to your account.
Select the social media platform for which you want to generate content.
Provide the necessary inputs and let ContentCraft.ai generate the content for you.
Contributing
We welcome contributions! Please read our Contributing Guidelines for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
OpenAI for providing the GPT-2 model.
NestJS and ReactJS for their robust frameworks.

## Contributing
Contributions are welcomed! Please read details of our code and submit pull requests.

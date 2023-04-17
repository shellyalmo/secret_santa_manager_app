# Secret Santa Manager App
## Final Project on Appleseeds Fullstack Bootcamp

![image](https://user-images.githubusercontent.com/33236921/232438780-747cd954-589c-4299-9ea8-7c0c32f7f40f.png)

This Fullstack App allows users to participate in Secret Santa games, by viewing their gift receiver and getting customized gift ideas from OpenAI's ChatGPT model 3.5.

Users can also perform admin actions such as:
* Create a new game
* Choose the game's theme. Supported holidays include Christmas, Purim and Eid Al-Fitr.
* Keep track of participants list and their progress in the game.


### Built With
#### Frontend:
* [![React][React.js]][React-url]
* [![Vite][Vite]][Vite-url]
* [![Axios][Axios]][Axios-url]
* [![Ant Design][Ant Design]][Antd-url]
* [![react-confetti][react-confetti]][react-confetti-url]
* [![react-router][react-router]][react-router-url]

#### Backend:
* [![Node.js][Node.js]][Node-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![mongoose][mongoose]][mongoose-url]
* [![Express][express]][express-url]
* [![JWT][jwt]][jwt-url]
* [![openAI][openAI]][openAI-url]

<!-- GETTING STARTED -->
## Getting Started
To get started, you'll need Node.js installed on your local machine and a MongoDB Atlas account. You'll also need a config.env file with the required environment variables.

### Environment Variables
Create a config.env file in the config folder and add the following environment variables:

```
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
FILE_UPLOAD_PATH= ./public/uploads
UPLOADS_FOLDER= /uploads
MAX_FILE_SIZE=1000000
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
OPENAI_API_KEY=your_openai_key
```

<!-- USAGE EXAMPLES -->
## Usage





<!-- CONTACT -->
## Contact

Shelly Almoznino - [LinkedIn]([https://twitter.com/your_username](https://www.linkedin.com/in/shelly-almoznino/)) 

Project Link: [secret_santa_manager_app](https://github.com/shellyalmo/secret_santa_manager_app)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Vite]: https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E
[Vite-url]: https://vitejs.dev/
[Axios]: https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=for-the-badge
[Axios-url]: https://axios-http.com/docs/intro
[Ant Design]: https://img.shields.io/badge/Ant%20Design-0170FE?logo=antdesign&logoColor=fff&style=for-the-badge
[Antd-url]: https://ant.design/
[react-confetti]: https://img.shields.io/badge/react-confetti-100000?style=for-the-badge&logo=react-confetti&logoColor=D32B2B&labelColor=FFF700&color=C117CD
[react-confetti-url]: https://github.com/alampros/react-confetti#readme
[react-router]: https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=for-the-badge
[react-router-url]: https://reactrouter.com/en/main
[MongoDB]: 	https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[mongoose]: 	https://img.shields.io/badge/mongoose-100000?style=for-the-badge&logo=mongoose&logoColor=D32B2B&labelColor=FFF700&color=B30404
[mongoose-url]: https://mongoosejs.com/
[express]: 		https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[express-url]: https://expressjs.com/
[jwt]: 	https://img.shields.io/badge/JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff&style=for-the-badge
[jwt-url]: https://jwt.io/
[openAI]: 	https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=fff&style=for-the-badge
[openAI-url]: https://openai.com/

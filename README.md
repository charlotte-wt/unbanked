# unbanked

## Requirements
1. npm 8.19.2 
2. node v16.15.0

## how to run the web application

1. create a `.env` file in the `server` folder.

2. add the following lines to the '.env' file.
```
PORT=5000
MONGODB_CONNECTION = "<insert_your_cloud_db_URL_here>"
JWTKEY="MERN"
```

3. `cd server`, `npm install`, then `npm run start`.

4. Open a 2nd shell, `cd client`, `npm install`, then `npm run start`.

5. Open a 3rd shell, `cd socket`, `npm install`, then `npm run start`.


## Application View

An application aimed at connecting unbanked individuals with finance professionals, for the unbanked individuals to seek professional help on their journey to becoming more financially-savvy.

1. They will first have to login or sign up for an account.

![Login Page](https://github.com/charlotte-wt/unbanked/blob/master/appImages/Login.png?raw=true)

![Signup Page](https://github.com/charlotte-wt/unbanked/blob/master/appImages/Signup.png?raw=true)


2. They will be redirected to the home page after logging in / signing up. We used simple words and emphasized buttons in the centre for easier usage - especially if our target audience may be less educated.

![Home Page](https://github.com/charlotte-wt/unbanked/blob/master/appImages/HomePage.png?raw=true)


3. They will be connected with financial professionals that will create a chatroom via the backend API.
![Chat Page](https://github.com/charlotte-wt/unbanked/blob/master/appImages/ChatPage.png?raw=true)


4. Backend api requires both the userId of the professional and the user in the body.
![Chat API](https://github.com/charlotte-wt/unbanked/blob/master/appImages/OpenChatRoom.png?raw=true)

5. They can also remit money via the application. (Intention is to use 3rd party remittance applications via their APIs)
![Remit Page](https://github.com/charlotte-wt/unbanked/blob/master/appImages/RemittancePage.png?raw=true)

6. They will receive a notification upon success.
![Remit Page](https://github.com/charlotte-wt/unbanked/blob/master/appImages/SuccessIndicator.png?raw=true)

7. They can also post questions on their profile.
![Profile Page](https://github.com/charlotte-wt/unbanked/blob/master/appImages/ProfilePage.png?raw=true)


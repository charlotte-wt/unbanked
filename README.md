# unbanked

## how to run the web application

1. create a `.env` file in the `server` folder.

2. add the following lines to the '.env' file
```
PORT=5000
MONGODB_CONNECTION = "<insert_your_cloud_db_URL_here>"
JWTKEY="MERN"
```

3. `cd server`, `npm install`, then `npm run start`

4. Open a 2nd shell, `cd client`, `npm install`, then `npm run start`

5. Open a 3rd shell, `cd socket`, `npm install`, then `npm run start`.




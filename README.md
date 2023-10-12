# Space X Launches API

This API provide two endpoint, one to get all the Space X Launches, and another one to set user favorite Launches.

For all the endpoint a header "X-USER-ID" with the User Id can be provided, if not default user id '1' is used.

## Available endpoint

### GET /launches

### POST /launches/favorite

Body 
```json
{
    "flight_numbers": int[]
}
```


## Run the project

To run the project:
- First you need to install docker and run the compose file with `docker-compose up` to run the mongoDB container
- On VS code you can run the launch script
- On the terminal you can run the command `node src/index.js`

## Examples

There is a postman collection that can be imported on root folder

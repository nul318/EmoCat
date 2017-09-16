# EmoCat

## Description
- Recognize people's face by camera and quantify happiness

- APIs are opened to anyone who registered

- Based On Mobile Vision & Node.js


## API

#### POST /emoInfo
- Insert happiness score of people who are captured by device
- Body: device_id(string)

#### GET /happiness
- Response latest happiness score captured by specific device_id
- Query : device_id(string)

#### GET /info/user/:uid/:id
- Response happiness scores of specific user
- Just response over specific 'id' value

#### GET /info/device/:device_id/:id
- Response happiness scores captured by specific device
- Just response over specific 'id' value



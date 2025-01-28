# User API Documentation

## Register User
Register a new user in the system.

### HTTP METHOD
'POST'

### Endpoint

'/users/register'

### Request Body
```json
{
    "fullname": {
        "firstname": "string", // minimum 3 characters
        "lastname": "string"   // minimum 3 characters
    },
    "email": "string",        // valid email format
    "password": "string"      // minimum 6 characters
}
```

### Response

#### Success Response
- **Status Code**: 201 (Created)
- **Response Body**:
```json
{
    "token": "jwt_token_string",
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "_id": "string"
    }
}
```

#### Error Responses
- **Status Code**: 400 (Bad Request)
  - When validation fails
```json
{
    "errors": [
        {
            "msg": "error message",
            "param": "field_name"
        }
    ]
}
```

### Validation Rules
- First name: Minimum 3 characters
- Email: Must be a valid email format
- Password: Minimum 6 characters

## Login User
Authenticate an existing user in the system.

### HTTP METHOD
'POST'

### Endpoint

'/users/login'

### Request Body
```json
{
    "email": "string",        // valid email format
    "password": "string"      // minimum 6 characters
}
```

### Response

#### Success Response
- **Status Code**: 200 (OK)
- **Response Body**:
```json
{
    "token": "jwt_token_string",
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "_id": "string"
    }
}
```

#### Error Responses
- **Status Code**: 400 (Bad Request)
  - When validation fails
```json
{
    "errors": [
        {
            "msg": "error message",
            "param": "field_name"
        }
    ]
}
```
- **Status Code**: 401 (Unauthorized)
  - When email or password is incorrect
```json
{
    "message": "Invalid email or password"
}
```

### Validation Rules
- Email: Must be a valid email format
- Password: Minimum 6 characters

## Get User Profile
Get the profile information of the authenticated user.

### HTTP METHOD
'GET'

### Endpoint
'/users/profile'

### Headers
- Authorization: Bearer {jwt_token_string}

### Response

#### Success Response
- **Status Code**: 200 (OK)
- **Response Body**:
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "_id": "string"
}
```

#### Error Responses
- **Status Code**: 401 (Unauthorized)
  - When no token is provided or token is invalid
```json
{
    "message": "Unauthorized"
}
```

## Logout User
Logout the currently authenticated user and blacklist the token provided in cookie or parser.

### HTTP METHOD
'GET'

### Endpoint
'/users/logout'

### Headers
- Authorization: Bearer {jwt_token_string}

### Response

#### Success Response
- **Status Code**: 200 (OK)
- **Response Body**:
```json
{
    "message": "Logged out successfully"
}
```

#### Error Responses
- **Status Code**: 401 (Unauthorized)
  - When no token is provided or token is invalid
```json
{
    "message": "Unauthorized"
}
```

# Captain API Documentation

## Register Captain
Register a new captain in the system.

### HTTP METHOD
'POST'

### Endpoint
'/captains/register'

### Request Body
```json
{
    "fullname": {
        "firstname": "string", // minimum 3 characters
        "lastname": "string"   // optional
    },
    "email": "string",        // valid email format
    "password": "string",     // minimum 6 characters
    "vehicle": {
        "color": "string",    // minimum 3 characters
        "plate": "string",    // minimum 3 characters
        "capacity": "number", // must be integer
        "vehicleType": "string" // must be one of: 'car', 'motorcycle', 'auto'
    }
}
```

### Response

#### Success Response
- **Status Code**: 201 (Created)
- **Response Body**:
```json
{
    "token": "jwt_token_string",
    "captain": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "vehicle": {
            "color": "string",
            "plate": "string",
            "capacity": 1,
            "vehicleType": "string"
        },
        "_id": "string"
    }
}
```

#### Error Responses
- **Status Code**: 400 (Bad Request)
  - When validation fails
```json
{
    "errors": [
        {
            "msg": "error message",
            "param": "field_name"
        }
    ]
}
```

### Validation Rules
- First name: Minimum 3 characters
- Email: Must be a valid email format
- Password: Minimum 6 characters
- Vehicle color: Minimum 3 characters
- Vehicle plate: Minimum 3 characters
- Vehicle capacity: Must be an integer
- Vehicle type: Must be one of: 'car', 'motorcycle', 'auto'



### RESPONSE 

// {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4NTRmMjBlZmJhMTVkMjM0M2JkM2MiLCJpYXQiOjE3MzgwMzY0NjYsImV4cCI6MTczODEyMjg2Nn0.qzAndkak6H6iw9T9liSFjd_7ls_VNbU3Gh0UHaCG0NY",
// "captain":{
// "fullname":{
// "firstname":"test_captain_firstname",
// "lastname":"test_captain_lastname"
// },
// "email":"tests_email@gmail.com",
// "password":"$2b$10$Glx0nZEPUGujg84EeclLV.vDIBQsEiMGFDdkd3cEBeQe9PAejqCDO",
// "status":"inactive",
// "vehicle":{
// "color":"red",
// "plate":"MP 04 XY 6204",
// "capacity":3,
// "vehicleType":"car"
// },
// "_id":"679854f20efba15d2343bd3c",
// "__v":0}}


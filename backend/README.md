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
const axios = require('axios')
const validator = require('jsonschema')
const postActivitiesSchema = require('../data/postActivitiesSchema.v1.json')


describe ('Tests for post API Activities', function() {
    let response;

    beforeAll(async () =>{
        response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Activities/', {
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            data: {
                "id": 31,
                "title": "string",
                "dueDate": "2023-07-15T19:55:32.651Z",
                "completed": true
        }
        })
    })

    test('POST request should be 200', async() => {
        await expect(response.status).toEqual(200)
    })

    test('POST should be valid schema', async() => {
        const result = await validator.validate(response.data, postActivitiesSchema)
        await expect(result.valid).toEqual(true)
    })
})
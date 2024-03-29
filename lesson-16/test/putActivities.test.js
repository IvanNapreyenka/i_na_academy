const axios = require('axios')
const validator = require('jsonschema')
const putActivitiesSchema = require('../data/putActivitiesSchema.v1.json')


describe ('Tests for put API Activities', function() {
    let response;
    beforeAll(async () =>{
        response = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Activities/30', {
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            data: {
                "id": 0,
                "title": "string",
                "dueDate": "2023-07-15T21:02:23.856Z",
                "completed": true
        }
        })
    })

    test('PUT request should be 200', async() => {
        await expect(response.status).toEqual(200)
    })

    test('PUT should be valid schema', async() => {
        const result = await validator.validate(response.data, putActivitiesSchema)
        await expect(result.valid).toEqual(true)
    })
})
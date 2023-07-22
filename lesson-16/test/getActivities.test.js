const axios = require('axios')
const validator = require('jsonschema')
const getActivitiesSchema = require('../data/getActivitiesSchema.v1.json')
const getByIdActivitiesSchema = require('../data/getByIdActivitiesSchema.v1.json')


describe ('Tests for get API Activities', function() {
    let response1;
    let response2;
    beforeAll(async () =>{
        response1 = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/', {
            headers: {
                Accept: 'text/plain'
            }
        })
        response2 = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/30', {
            headers: {
                Accept: 'text/plain'
            }
        })
    })

    test('GET request should be 200', async() => {
        await expect(response1.status).toEqual(200)
    })

    test('GET should be valid json schema', async() => {
        const result = await validator.validate(response1.data, getActivitiesSchema)
        await expect(result.valid).toEqual(true)
    })

    test('GET activities by id request should be 200', async() => {
        await expect(response2.status).toEqual(200)
    })

    test('GET activities by id should be valid json schema', async() => {
        const result = await validator.validate(response2.data, getByIdActivitiesSchema)
        await expect(result.valid).toEqual(true)
    })

})
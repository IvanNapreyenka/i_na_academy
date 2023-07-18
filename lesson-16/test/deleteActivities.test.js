const axios = require('axios')

describe ('Tests for delete API Activities', function() {

    test('DELETE activities by id request should be 200', async() => {
        const response = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Activities/30', {
            headers: {
                Accept: '*/*'
            }
        })
        await expect(response.status).toEqual(200)
    })
})
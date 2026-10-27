import {test, expect} from 'playwright/test';

test('API_GET Test', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');

    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('2');

    console.log(await response.json());

})

test('API_POST Test', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users',{
        data: {
            name: 'John Doe',
            job: 'software engineer'
        }
    });

    expect(response.status()).toBe(201);

    const text = await response.text();
    expect(text).toContain('John Doe');

    console.log(await response.json());
})

test('API_PUT Test', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2',{
        data: {
            name: 'John',
            job: 'software engineer'
        }
    });

    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('software engineer');

    console.log(await response.json());
})



test('API_DELETE Test', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');

    expect(response.status()).toBe(204);
})
    
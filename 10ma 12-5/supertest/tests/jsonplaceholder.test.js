//requiere el .test.js para que jest lo reconozca como un test
import request from 'supertest';
// va a ser el servidor que se va a levantar para hacer las pruebas

const api = request('https://jsonplaceholder.typicode.com');
// url base para hacer las pruebas

describe('JSONPlaceholder API - test simples con super test', () => { 
    test('GET /posts/1 - debe devolver un array de posts exitosamente', async () => {
        //Arrange - todo lo necesario para llamar a la api
        const postID = 1;
        
        //Act   - hacemos la petición a la API - await
        const response = await api.get(`/posts/${postID}`);

        //Assert - verificamos que la respuesta sea correcta
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('application/json');
        expect(typeof response.body.title).toBe('string');
        expect(typeof response.body.body).toBe('string');
    });

    test('GET /posts - devuelve un array de posts', async () => {
        //Arrange
  
        //Act
        const response = await api.get('/posts');
        //Assert
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toHaveLength(100); // JSONPlaceholder devuelve 100 posts por defecto
    });

    test('GET /users/1 - devuelve un usuario específico', async () => {
        //Arrange

        //Act
        const response = await api.get('/users/1');
        //Assert
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz'
        });
        
    }); 
});
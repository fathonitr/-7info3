const {app, request} = require("../testSetup")

describe("Test the root path", () => {
    test("It should response the GET method", () => {
        return request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });
});
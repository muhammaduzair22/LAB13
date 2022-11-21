const request = require("supertest");
const app = require("./routes/User");
const mongoose = require("mongoose");


describe("Test the route path", () => {
    test("It should response the GET method", () => {
        const response = request(app).post("http://localhost:8000/User/add").send({
            "Name": "uzair",
            "Email": "@uzair",
            "age": 20,
            "Contact": 123,
        })

        expect(response.statusCode).toBe(200);
    })
})

describe("Test the route path", () => {
    test("It should response the GET method", () => {
        const response = request(app).delete("http://localhost:8000/User/:id").send({
            "Name": "uzair",
            "Email": "@uzair",
            "age": 20,
            "Contact": 123,
        })

        expect(response.statusCode).toBe(200);
    })
})

describe("Test the route path", () => {
    test("It should response the GET method", () => {
        const response = request(app).post("http://localhost:8000/User/add").send({
            "Name": "uzair",
        })

        expect(response.statusCode).toBe(200);
    })
})

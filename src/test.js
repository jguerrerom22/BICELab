const request = require("supertest");
const mocha = require("mocha");
const describe = mocha.describe;
const it = mocha.it;
const expect = require("chai").expect;
const app = require("../app").app;

describe("GET /indicadores", function () {
  it("Debe retornar un objetos de objetos de indicadores", async function () {
    const response = await request(app).get("/indicadores");
    expect(response.body).to.be.an("array");
    expect(response.status).to.eql(200);
  });

  it("Debe retornar un indicador válido", async function () {
    const response = await request(app).get("/indicadores/cobre");
    expect(response.body).to.have.property("key");
    expect(response.body).to.have.property("name");
    expect(response.body).to.have.property("unit");
    expect(response.body).to.have.property("values");
    expect(response.status).to.eql(200);
  });

  it("Debe retornar 404 para un indicador no existente", async function () {
    const response = await request(app).get("/indicadores/hola");
    expect(response.status).to.eql(404);
  });

  it("Debe retornar un indicador válido para una fecha", async function () {
    const response = await request(app).get(
      "/indicadores/cobre?date=02-01-2020"
    );
    expect(response.body).to.have.property("key");
    expect(response.body).to.have.property("name");
    expect(response.body).to.have.property("unit");
    expect(response.body).to.have.property("date");
    expect(response.body).to.have.property("value");
    expect(response.status).to.eql(200);
  });

  it("Debe retornar un valor null para una fecha inexistente", async function () {
    const response = await request(app).get(
      "/indicadores/cobre?date=02-01-2023"
    );
    expect(response.body.value).to.be.null;
    expect(response.status).to.eql(200);
  });
});

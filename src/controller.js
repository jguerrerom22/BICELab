const { response } = require("express");
const IndeconService = require("./IndeconService");
const service = new IndeconService();

const getAll = async (req, res = response) => {
  try {
    let rows = [];
    const { data } = await service.listAll();
    if (Object.keys(data).length > 0) {
      rows = Object.values(data).map((val) => val);
    }
    res.status(200).json(rows);
  } catch (error) {
    returnError(error, res);
  }
};

const getOne = async (req, res = response) => {
  const key = req.params.id;
  try {
    let resp;
    if (req.query.date) {
      resp = await service.listByDate(key, req.query.date);
    } else {
      resp = await service.listOne(key);
    }
    data = resp.data;
    Object.keys(data).length > 0
      ? res.status(200).json(data)
      : res.status(404).json({ message: `No se encontró el indicador ${key}` });
  } catch (error) {
    returnError(error, res);
  }
};

const returnError = (error, res = response) => {
  res.status(400).json({ message: error });
};

module.exports = { getAll, getOne };

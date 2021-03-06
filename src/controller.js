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
    if (Object.keys(data).length > 0) {
      if (data.values) {
        data.values = Object.entries(data.values).map((val) => ({
          timestamp: Number(val[0]),
          value: val[1],
        }));
      }
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: `No se encontrĂ³ el indicador ${key}` });
    }
  } catch (error) {
    returnError(error, res);
  }
};

const returnError = (error, res = response) => {
  res.status(400).json({ message: error });
};

module.exports = { getAll, getOne };

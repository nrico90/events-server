const express = require("express");
const { Router } = require("express");
const router = new Router();
const Event = require("../event/model");

router.post("/event", (request, response, next) => {
  Event.create(request.body)
    .then(event => response.send(event))
    .catch(errors => next(errors));
});

router.get("/event", (request, response, next) =>
  Event.findAll()
    .then(data => response.send(data))
    .catch(error => next(error))
);

router.get("/event/:id", (request, response, next) =>
  Event.findByPk(request.params.id)
    .then(event => response.send(data))
    .catch(error => next(error))
);

router.put("/event/:id", (request, response, next) =>
  Event.findByPk(request.params.id)
    .then(event => event.update(request.body))
    .then(event => response.send(event))
    .catch(next)
);

router.delete("/event/:id", (request, response, next) =>
  Event.destroy({ where: { id: request.params.id } })
    .then(number => response.send({ number }))
    .catch(next)
);

module.exports = router;

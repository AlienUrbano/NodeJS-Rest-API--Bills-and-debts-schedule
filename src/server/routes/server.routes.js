const server = require("../server")

module.exports = server => {
  

  const router = require("express").Router()
  const appHandler = require('../handlers/server.handler')

  // Schedules a bill or debt
  router.post("/bill", appHandler.scheduleBill)

  // Lists all bills and debts
  router.get("/bills", appHandler.listAllBills)

  // Details a bill or debt
  router.get("/bill/:id", appHandler.detaillBillById)

  // update a bill or debt
  router.put("/bill/:id", appHandler.updateBillById)

  // delete a bill or debt
  router.delete("/bill/:id", appHandler.deleteBillById)


  server.use('/api', router)
  
}

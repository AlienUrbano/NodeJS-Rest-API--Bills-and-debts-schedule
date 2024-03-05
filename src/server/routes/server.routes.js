module.exports = server => {
  

  const router = require("express").Router()
  const appHandler = require('../handlers/server.handler.js')
  const UserHandler = require('../handlers/user.handler.js')

  // Schedules a bill or debt
  router.post("/bill", appHandler.scheduleBill)

  // Lists all bills and debts
  router.get("/bills", appHandler.listAllBills)

  // Details a bill or debt
  router.get("/bill/:id", appHandler.detaillBillById)

  // Update a bill or debt
  router.put("/bill/:id", appHandler.updateBillById)

  // Delete a bill or debt
  router.delete("/bill/:id", appHandler.deleteBillById)


  // User Routes

  router.post("/signup", UserHandler.signUp)
  
  router.post("/signin", UserHandler.signIn)


  server.use('/api', router)
  
}

const { Bills } = require('../../database/models/index')


exports.scheduleBill = async (req, res) => {

    const data = req.body

    const newBill = await Bills.create(data)
    return res.json(newBill)

}

exports.listAllBills = async (req, res) => {

    const billsList = await Bills.findAll()
    return res.json(billsList)

}

exports.detaillBillById = async (req, res) => {

    const id = req.params.id

    const billDetailById = await Bills.findOne({where: {id}})
    return res.json(billDetailById)

}

exports.updateBillById = async (req, res) => {

    const id = req.params.id


    const billData = req.body
    const updateBillStatusById = await Bills.update(billData, {where: {id}})
    return res.json({ msg: `updated bill #${id}` })

}

exports.deleteBillById = async (req, res) => {

    const id = req.params.id

    const deleteBillById = await Bills.destroy({where: {id}})
    return res.json({ msg: `deleted bill #${id}` })

}
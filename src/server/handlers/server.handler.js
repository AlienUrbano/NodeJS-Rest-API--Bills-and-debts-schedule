const { Bills } = require('../../database/models/index')


exports.scheduleBill = async (req, res) => {

try {

    const { billName, price, owner, maxPaymentDate} = req.body
    
    if(!billName || !price || !owner || !maxPaymentDate) {
        return res.json({msg: 'Please fill all the required fields to create a table: billName:string, price:string, owner:string and maxPaymentDate:string'})
    }
    
    const data = {
        billName: billName,
        price: price,
        owner: owner,
        maxPaymentDate: maxPaymentDate,
        status: 'to-pay'
    
    }
    
    const newBill = await Bills.create(data)
    
    if(!newBill){
        return res.json({msg: "Error at creating a new Bill"})
    }
    
    return res.json(newBill)

} catch(error) {

    return res.status(500).send({error: "error", message: error.message})

}


}

exports.listAllBills = async (req, res) => {

    const billsList = await Bills.findAll()

    
    return res.json(billsList)

}

exports.detaillBillById = async (req, res) => {

    const id = req.params.id

    const billDetailById = await Bills.findOne({where: {id}})

    if(!billDetailById){
        return res.json({msg: 'that ID was not found'})
    }

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
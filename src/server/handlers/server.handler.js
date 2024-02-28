exports.scheduleBill = (req, res) => {

    const data = req.body
    return res.json(data)

}

exports.listAllBills = (req, res) => {

    return res.json({ msg: "List bills..." })

}

exports.detaillBillById = (req, res) => {

    const id = req.params.id

    return res.json({ msg: `detail of bill #${id}` })

}

exports.updateBillById = (req, res) => {

    const id = req.params.id

    return res.json({ msg: `update bill #${id}` })

}

exports.deleteBillById = (req, res) => {

    const id = req.params.id

    return res.json({ msg: `delete bill #${id}` })

}
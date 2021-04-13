//Todo 1.3 [15 points]: Implement the order service class and methods listed in the exam PDF file

import customerRepo from '../repository/order-tracker-repo.js'
class CustomerService {
    async getCustomers(req, res) {
        try{

            const customers = await customerRepo.getCustomers(req.query.type)
            console.log(customers)

        }catch(e){
            'Exception'
        }
    }
    async addCustomer(req, res) {
        try{
            const customer = req.body
            res.send(await customerRepo.addCustomer(customer))
        }catch(e){
            'Exception'
        }
    }

    async updateCustomer(req, res) {
        try{
            const customer = req.body
            res.json(await customerRepo.updateCustomer(customer))
        }catch(e){
            'Exception'
        }
    }

    async getCustomer(req, res) {
        try{
            const id = req.params.id
            await customerRepo.getCustomer(id)
        }catch(e){
            'Exception'
        }
    }

    async deleteCustomer(req, res) {
        try{
            await customerRepo.deleteCustomer(req.params._id)
        }catch(e){
            'Exception'
        }

    }
    async addOrder(req, res) {
        try{
            const order = req.body
            const order1 = customerRepo.addOrder(order)
        }catch(e) {
            'Exception'
        }
    }
}

export default new CustomerService()
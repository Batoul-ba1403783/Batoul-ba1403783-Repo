// Todo 1.2 (30 Points) : Implement the repo class and methods :
//  make sure you read the exam PDF file to understand the requirements

import Customer from '../model/customer.js'
import Order from '../model/order.js'

class CustomerRepo {
    async getCustomers() {
        return Customer.find();
    }

    async addCustomer(customer) {
        return Customer.create(customer)
    }

    async deleteCustomer(id) {
        return Order.findByIdAndDelete(Order.customerId)
        return Customer.findByIdAndDelete(id)
    }

    async getCustomerOrders(customerId) {
        return Order.find({customerId}).populate('customerId')
    }

    async getCustomer(id) {
        return Customer.findOne({_id: id})
    }

    async addOrder(order) {
        const customer = await this.getCustomer(order.id)

        const newOrder = await Order.create(order)

        return newOrder
    }

    async updateOrder(updatedOrder) {
        return Order.findByIdAndUpdate(updatedOrder._id, updatedOrder)
    }

    async deleteOrder(orderId){
        return Customer.findByIdAndDelete(orderId)
    }

    async getOrder(orderId) {
        return Order.findOne({_id: orderId})
    }
}

export default new CustomerRepo()
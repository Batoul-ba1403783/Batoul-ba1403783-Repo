// this is the client side repository. So please be careful to not confuse it with the server one
//Todo 2 Implement the methods that allow you to read and write data from and to the server

const baseUrl = '/api/accounts'

export default class OrderRepository {
    async getCustomers() {
        const response = await fetch('/api/customers/', {
            method: 'GET'
        });
        return response.json();
    }

    async addCustomer(customer) {
        return await fetch('/api/customers',
            {
                method: 'POST',
                headers: {'Content-Type': "application/json",},
                body: JSON.stringify(customer)
            })
    }

    async deleteCustomer(customerId) {
        return await fetch(`/api/customers/${customerId}`,
            {
                method: 'DELETE'
            })
    }

    async getCustomerOrders(customerId) {
        let url = `/api/customers/${customerId}/orders`
        const response = await fetch(url)
        return response.json()
    }

    async addOrder(order) {
        const url = `/api/customers/${order.customerId}/order`
        await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        });
    }

    async updateOrder(order) {
        const url = `/api/customers/${order.customerId}/orders`
        return await fetch(url,
            {
                method: 'PUT',
                headers: {'Content-Type': "application/json",},
                body: JSON.stringify(order)
            })
    }

    async getOrder(customerId, orderId) {
        const url = `/api/customers/${customerId}/orders/${orderId}`
        return await fetch(url,{
            method: 'GET'
        })
    }

    async deleteOrder(customerId, orderId) {
        const url = `/api/customers/${customerId}/orders/${orderId}`
        return await fetch(url,{
            method: 'DELETE'
        })
    }
}

export default new CustomerRepo()
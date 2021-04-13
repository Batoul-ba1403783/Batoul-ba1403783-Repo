//Todo 1.4 [10 points]: Implement all the given routes in the exam PDF

import express from 'express'
import customerService from "./sevice/order-tracker-service.js";

const router = express.Router()

router.route('/customers')
    .get(customerService.getCustomers)
    .post(customerService.addCustomer)

router.route('/customers/:id/orders')
    .post(customerService.addOrder)

router.route('/customers/:id')
    .get(customerService.getCustomer)
    .delete(customerService.deleteCustomer)

export default router
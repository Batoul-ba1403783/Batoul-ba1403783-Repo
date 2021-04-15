import Product from '../models/products.js'
import fs from 'fs-extra'
import { fileURLToPath } from 'url';

class ProductRepo {
    constructor() {
        this.filePath = fileURLToPath(new URL('../data/products.json', import.meta.url));
    }

    async getProducts() {
        return await Product.find({})
    }

    async getProduct(pid) {
        return await Product.findOne({ pid })
    }

    async addProduct(newProduct) {
        return await Product.create({
            'pid': newProduct.pid,
            'name': newProduct.name,
            'description': newProduct.description,
            'price': newProduct.price
        });
    }

    async updateProduct(updatedProduct) {
        return await Product.findByIdAndUpdate(updatedProduct._id, updatedProduct)

    }

    async deleteProduct(pid) {
        return await Product.deleteOne({
            'pid': pid
        })
    }

    async deleteAllProducts() {
        return await Product.remove({});
    }

    async getStatistics() {
        return await Product.aggregate(
            [
                {
                    $group: {
                        _id: '',
                        'totalPrice': {
                            $sum: "$price"
                        },
                        'totalNumberOfProducts': {
                            $sum: 1
                        }
                    }
                }
            ]
        )
    }

    async getTopExpensiveProducts(limit) {
        return await Product.aggregate(
            [

                {
                    $sort: {
                        'price': -1
                    }
                },
                {
                    $limit: parseInt(limit)
                }
            ]
        )
    }

    async initDB() {
        try {
            const productCount = await Product.countDocuments({});
            if (productCount == 0) {
                const products = await fs.readJson(this.filePath);
                for (const prod of products)
                    await this.addProduct(prod);
            }
            return true;
        }
        catch (err) {
            return err;
        }
    }

}

export default new ProductRepo()
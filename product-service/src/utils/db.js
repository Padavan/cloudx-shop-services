import { v4 as uuidv4 } from 'uuid';

class DatabaseService {
    productTableName = 'products';
    stocksTableName = 'stocks';
    client;

    constructor(client){
      this.client = client;
    }

    async getProductById(id) {
        const query = {
            text: `SELECT * FROM ${this.productTableName} FULL OUTER JOIN ${this.stocksTableName} ON ${this.productTableName}.id = ${this.stocksTableName}.id WHERE ${this.productTableName}.id = $1`,
            values: [id],
        };

        const result = await  this.client.query(query);
        return result.rows[0] ? result.rows[0] : null;
    };

    async getAllProducts() {
        const query = {
          text: `SELECT * FROM ${this.productTableName} FULL OUTER JOIN ${this.stocksTableName} ON ${this.productTableName}.id = ${this.stocksTableName}.id;`,
        };

        const result = await this.client.query(query);
        return result.rows ? result.rows : null;
    }

    async createProduct(product) {
        const newId = uuidv4();
        const image = product.image ? product.image : 'noimage';

        const query = {
            text: `INSERT INTO ${this.productTableName}(id, title, description, price, image) VALUES($1, $2, $3, $4, $5) RETURNING *`,
            values: [newId, product.title, product.description, product.price, product.image],
        };
        const query2 = {
            text: `INSERT INTO ${this.stocksTableName}(id, count) VALUES($1, $2) RETURNING *`,
            values: [newId, product.count],
        };

        const result = await this.client.query(query);
        const result2 = await this.client.query(query2);
        return result.rows[0] ? result.rows[0] : null;
    }

    async updateProduct(product) {
        const selectedId = product.id;

        const query = {
            text: `
                UPDATE ${this.productTableName}
                SET "title" = $1, "description" = $2, "price" = $3, "image" = $4
                WHERE "id" = $5
            `,
            values: [product.title, product.description, product.price, product.image, selectedId],
        };
        const query2 = {
            text: `
                UPDATE ${this.stocksTableName}
                SET "count"=$1
                WHERE id=$2
            `,
            values: [product.count, selectedId],
        };

        const result = await this.client.query(query);
        const result2 = await this.client.query(query2);
        return result.rows[0] ? result.rows[0] : null;
    }
}

export { DatabaseService };
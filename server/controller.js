let inventory = []

module.exports= {
    createProduct: (req, res) => {
        let { name, price, imageUrl } = req.body;

        let product = {
            id: id,
            name,
            price,
            imageUrl
        }
    inventory.push(product);
    id++;
    res.status(200).send(inventory)
    },

    deleteProduct: (req, res) => {
        let { id } = req.params

        let index = inventory.findIndex(product => Number(product.id) === Number(id))

        inventory.splice(index, 1)
        res.send(inventory)
    },

    updateProduct: (req, res) => {
        let { name, price, imageUrl } = req.body
        
        let product = {
            id: req.params.id,
            name,
            price,
            imageUrl
        }

        let index = inventory.findIndex(product => Number(product.id) === Number(id))

        inventory.splice(index, 1, product)
        res.send(inventory)
    }
}
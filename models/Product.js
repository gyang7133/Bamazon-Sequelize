module.exports = function(connection, Sequelize) {
    const Product = connection.define('Product', {
      product_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      department_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.STRING,
        defaultValue: 'N/A'
      },
      stock_quantity:{
        type:Sequelize.INTEGER,
        defaultValue: 'N/A'
      }
    });
  
    return Product;
  }
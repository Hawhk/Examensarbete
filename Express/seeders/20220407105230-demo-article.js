'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Articles', [
      {
        header: 'Ullam veritatis consectetur est.',
        subHeader: 'Sint quibusdam quibusdam voluptatem',
        description: 'Eum voluptate qui. Et aut iste autem nemo id ipsa est quae laborum. Soluta sed quidem ut. Repellat voluptatum eius omnis assumenda suscipit quas illo.',
        datePosted: new Date(),
        postedBy: 'Darlene Brakus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        header: 'Maxime et pariatur aperiam.',
        subHeader: 'Reprehenderit nihil sint commodi explicabo.',
        description: 'Maxime et est et. Officia ad ut dignissimos repudiandae dolorum molestias ad. Ex mollitia expedita accusantium autem suscipit sed et quis.',
        datePosted: new Date(),
        postedBy: 'Jeff Blick',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Articles', null);
  }
};

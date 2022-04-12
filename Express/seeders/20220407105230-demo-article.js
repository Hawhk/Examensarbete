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
    return queryInterface.bulkInsert('articles', [
      {
        header: 'Ullam veritatis consectetur est.',
        sub_header: 'Sint quibusdam quibusdam voluptatem',
        description: 'Eum voluptate qui. Et aut iste autem nemo id ipsa est quae laborum. Soluta sed quidem ut. Repellat voluptatum eius omnis assumenda suscipit quas illo.',
        date_posted: new Date(),
        posted_by: 'Darlene Brakus',
        picture_url: 'space.jpg'
      },
      {
        header: 'Maxime et pariatur aperiam.',
        sub_header: 'Reprehenderit nihil sint commodi explicabo.',
        description: 'Maxime et est et. Officia ad ut dignissimos repudiandae dolorum molestias ad. Ex mollitia expedita accusantium autem suscipit sed et quis.',
        date_posted: new Date(),
        posted_by: 'Jeff Blick',
        picture_url: 'space.jpg'
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

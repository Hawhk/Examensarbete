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
    return queryInterface.bulkInsert('sections', [
      {
        header: 'Ut dolor necessitatibus magnam qui repellat.',
        body: 'Dolor rerum provident repellendus quis sequi quasi dolorem quidem porro. Odit qui aperiam et illum reprehenderit officia dignissimos error. ' +
            'Aut omnis incidunt iusto et sit tempore assumenda sed rerum.Omnis consequatur neque. Iure laudantium aspernatur quia corrupti vel distinctio impedit ut ut. ' +
            'Quis est quod hic. Dicta quis illum aspernatur sit nam incidunt. Aliquam corporis ut et maiores doloribus illum eaque sint. Optio quia nam laudantium. ' +
            'Qui eos sequi facere nam. Quam odit possimus deleniti quos amet aut sint debitis eius. Tempore a vitae similique sit veritatis cum quasi. ' +
            'Quas cumque dicta et. Cupiditate eius eaque velit neque sit.',
        article_id: 1,
      },
      {
        header: 'Dolorum facilis sed molestiae mollitia blanditiis.',
        body: 'Unde aut adipisci unde praesentium perspiciatis voluptatem iure nisi excepturi. Iste modi voluptatum dolorum. ' +
            'Ut ad odio aut accusantium aliquam tempora deserunt qui distinctio. Tempora illo blanditiis. ' +
            'Totam quas fuga quibusdam provident vel. Repellat enim consequatur excepturi temporibus exercitationem. ' +
            'Accusantium molestias dolores cum delectus labore qui. Aspernatur similique dignissimos. Ut tempore pariatur. ' +
            'Deserunt sit aliquid sit et et neque earum delectus.Velit nihil totam. Consequatur et culpa ipsum sed. ' +
            'Sint ipsum sed et in sequi ut dolore autem architecto.',
        article_id: 1,
      },
        // Article 2
      {
        "header": "Eos qui atque quam veniam dolores ex.",
        "body": "Eveniet dignissimos eos repudiandae voluptatem sint et nesciunt quisquam est. Quo qui voluptas fugiat autem cum sit inventore. Dolores explicabo debitis dolorem recusandae qui expedita molestiae." +
            "Voluptas molestiae ex nostrum assumenda. Impedit recusandae sunt reiciendis minus. Qui explicabo provident nobis. Perspiciatis ipsa praesentium repudiandae quis quia quas nihil. Necessitatibus dolores hic qui sed praesentium repellendus." +
            "Rem minima voluptatem quae dolorem ipsam ut. Quasi explicabo fuga. Eveniet qui corporis aliquam nemo repudiandae. Quia eaque tenetur enim ut mollitia.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Blanditiis sed fugiat impedit voluptatem.",
        "body": "Sed totam sit esse aut repellat et sunt. Repellat animi quis laborum culpa quos eos ullam repellendus error. Reprehenderit in veniam quisquam aut architecto. Minus exercitationem sed enim pariatur. Voluptatum necessitatibus vitae. Tempora enim quia nihil impedit quod fuga voluptate laudantium numquam." +
            "Soluta voluptatum tempore sit delectus quisquam numquam et sed in. Dolorem deserunt omnis inventore quae nihil non vel repudiandae mollitia. Quia modi nihil. Consequatur distinctio id aliquid vero." +
            "Beatae aut vero beatae natus eius. Corporis mollitia commodi. Consequatur qui voluptatum dolores. Doloribus facilis consequatur.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Laborum consequatur nam maxime velit qui cupiditate recusandae veniam.",
        "body": "Harum commodi optio quia beatae deleniti aspernatur voluptatum voluptatum. Possimus vel placeat voluptatem amet qui expedita dolore. Facere eum voluptatibus assumenda aut. Temporibus delectus magni amet laborum aspernatur laborum qui iste aut. Consequatur iste minus earum iusto repellendus aut porro eum rerum." +
            "Modi tempore ut. Facilis et voluptatem iusto illum suscipit sed omnis nesciunt. Porro fuga magnam ut. Similique qui et inventore aperiam. Cum nesciunt voluptatum nostrum est." +
            "Rerum nulla et nobis impedit reprehenderit. Dignissimos similique ut. Quas ut qui delectus quia sed debitis et aut facilis. Ut reprehenderit odio minus. Magni harum consectetur dolor placeat libero deleniti ut voluptate. Pariatur omnis hic blanditiis dolores ab et nam similique.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Dolorem qui provident eligendi voluptas.",
        "body": "Alias quidem culpa ratione voluptas aliquid et minus sunt. In recusandae numquam cum voluptas id aperiam. Ea iusto laborum. Voluptates quia a dicta delectus et exercitationem earum qui. Quidem temporibus tempore nesciunt reprehenderit in eaque asperiores." +
            "Consequatur eveniet doloribus sunt exercitationem repellendus. Nulla blanditiis aut dolores placeat perferendis rerum vel exercitationem. Quo quas optio eos quam id exercitationem commodi at corporis." +
            "Molestias reiciendis earum aut nam. Ullam non fuga nihil ab quia sit ut iste. Vitae possimus alias itaque reiciendis sunt beatae dicta eligendi repudiandae. Laborum quibusdam facere ex et magni tempore laborum. Eos non soluta neque modi non eveniet provident sit qui. Aut veritatis quia odio quia doloremque.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Quia aliquid qui blanditiis laborum qui repudiandae aut rerum.",
        "body": "Expedita consequatur eum dicta quibusdam iste quo iure voluptates placeat. Sit eum commodi reiciendis itaque deserunt ipsam. Tempora voluptas illum nulla et. Vero dolorum ut facilis voluptas. Adipisci impedit sint mollitia dolores quis in dolores." +
            "Odio similique cumque esse delectus similique reiciendis ea. Fugit fugit sit sint non ut tenetur. Tempora rem pariatur id architecto dolores ducimus voluptas aliquid explicabo. Et non totam aliquam dolores quia possimus. Vel nisi dolorem non." +
            "Enim optio numquam corporis eos sunt et dolorem. Nam excepturi odio ullam earum optio dolorem magnam autem. Illum voluptatem modi maxime veniam ducimus.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Doloribus nobis et esse nesciunt commodi non consequuntur.",
        "body": "Quaerat quam voluptatibus reprehenderit animi reiciendis magni officia eum ab. Porro aut blanditiis rerum et. Aperiam laudantium ipsa suscipit nostrum et. Et ut commodi. Laudantium molestiae rerum dolores." +
            "Aliquid ducimus eum quia nesciunt similique officiis minima. Quia consectetur voluptatem non. Ipsa id quia tenetur vitae ipsum expedita saepe itaque illo." +
            "Reiciendis id quis. Possimus rerum ex animi nam vel. Quibusdam et enim repellat beatae beatae numquam. Quis a libero cumque officiis et voluptatem aut. Dolorem aspernatur maxime excepturi deserunt voluptate quas. Dolorem minus voluptas non vel aut.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Sequi velit quisquam.",
        "body": "Eum ea exercitationem. Facilis assumenda nesciunt dolorem sequi. Ut ipsum eveniet incidunt praesentium sunt et animi. Soluta ad aut nisi cum suscipit. Id omnis ut laborum tempora aliquam fugit et explicabo mollitia." +
            "Placeat repellat voluptate earum. Consequatur voluptatem et voluptatem officia numquam consequatur. Et autem ut quasi occaecati libero. Eius tempora odit ea qui ipsum voluptatem ad. In ut libero ut." +
            "Quod reprehenderit libero iste omnis iusto error quam nam ex. Eum odio voluptas aut animi rerum odio sed ut. Nobis placeat excepturi. Reiciendis tempore repellendus fugit inventore. Tenetur ut ullam voluptatem assumenda earum earum.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Qui vero velit modi eos libero sapiente.",
        "body": "Unde sapiente sit ratione beatae corporis et eligendi commodi perferendis. Quis dolorem iure modi voluptas consequuntur voluptatibus. Neque laborum fugit necessitatibus. Asperiores optio illum quod ut suscipit totam asperiores incidunt." +
            "Eos corrupti voluptatem voluptas quia. Voluptatem vero tempora dignissimos sed. Tempore odit delectus aliquam maxime porro numquam." +
            "Atque omnis dolor rem sapiente officiis veniam. Nostrum quisquam ratione voluptate. Repellat adipisci repellendus voluptate neque quibusdam pariatur. Corporis aut velit beatae. Voluptate tempore modi. Aut sint provident provident consectetur tempore incidunt nesciunt.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Ab sit quae consectetur.",
        "body": "Voluptas sed laboriosam. Accusantium quia veniam accusamus sit illo quasi dolorem assumenda. Voluptatem porro et quod placeat porro ea. Aut et tenetur ad tempora eum. Maxime similique ut. Laudantium eum iusto harum laborum deleniti fugit." +
            "Maiores amet non corporis dolore magni hic aut quis non. Rem dolore dolore. Consectetur eum vitae numquam debitis sit pariatur qui corrupti facere. Ut voluptate mollitia. Qui omnis fugiat dolor non. Nesciunt labore vitae sed facilis." +
            "Sit numquam sint voluptatum saepe ut sit. In eaque vel consectetur corporis sequi. Nisi aliquid maxime expedita qui officia natus excepturi consectetur. Maiores illum et nam in deleniti quasi. Quaerat sed consequatur recusandae in sint. Blanditiis odit nostrum voluptatem incidunt quia perferendis nostrum.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Saepe fuga qui voluptas harum quisquam.",
        "body": "Qui omnis ut et molestias quis. Eum perferendis maxime quae. Reiciendis aut qui eos repellat repudiandae quibusdam assumenda." +
            "Est nesciunt quis. Sunt non fugit sit eveniet vel nesciunt. Id corporis unde mollitia molestiae sunt laboriosam delectus. Temporibus deserunt ducimus. Sed quam ut saepe perspiciatis a facilis omnis." +
            "Quos molestiae soluta blanditiis id. Atque qui explicabo. Molestias necessitatibus commodi. Facilis explicabo ab corrupti doloremque excepturi. Quae sed porro maiores enim aperiam.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Eos qui atque quam veniam dolores ex.",
        "body": "Eveniet dignissimos eos repudiandae voluptatem sint et nesciunt quisquam est. Quo qui voluptas fugiat autem cum sit inventore. Dolores explicabo debitis dolorem recusandae qui expedita molestiae." +
            "Voluptas molestiae ex nostrum assumenda. Impedit recusandae sunt reiciendis minus. Qui explicabo provident nobis. Perspiciatis ipsa praesentium repudiandae quis quia quas nihil. Necessitatibus dolores hic qui sed praesentium repellendus." +
            "Rem minima voluptatem quae dolorem ipsam ut. Quasi explicabo fuga. Eveniet qui corporis aliquam nemo repudiandae. Quia eaque tenetur enim ut mollitia.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Blanditiis sed fugiat impedit voluptatem.",
        "body": "Sed totam sit esse aut repellat et sunt. Repellat animi quis laborum culpa quos eos ullam repellendus error. Reprehenderit in veniam quisquam aut architecto. Minus exercitationem sed enim pariatur. Voluptatum necessitatibus vitae. Tempora enim quia nihil impedit quod fuga voluptate laudantium numquam." +
            "Soluta voluptatum tempore sit delectus quisquam numquam et sed in. Dolorem deserunt omnis inventore quae nihil non vel repudiandae mollitia. Quia modi nihil. Consequatur distinctio id aliquid vero." +
            "Beatae aut vero beatae natus eius. Corporis mollitia commodi. Consequatur qui voluptatum dolores. Doloribus facilis consequatur.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Laborum consequatur nam maxime velit qui cupiditate recusandae veniam.",
        "body": "Harum commodi optio quia beatae deleniti aspernatur voluptatum voluptatum. Possimus vel placeat voluptatem amet qui expedita dolore. Facere eum voluptatibus assumenda aut. Temporibus delectus magni amet laborum aspernatur laborum qui iste aut. Consequatur iste minus earum iusto repellendus aut porro eum rerum." +
            "Modi tempore ut. Facilis et voluptatem iusto illum suscipit sed omnis nesciunt. Porro fuga magnam ut. Similique qui et inventore aperiam. Cum nesciunt voluptatum nostrum est." +
            "Rerum nulla et nobis impedit reprehenderit. Dignissimos similique ut. Quas ut qui delectus quia sed debitis et aut facilis. Ut reprehenderit odio minus. Magni harum consectetur dolor placeat libero deleniti ut voluptate. Pariatur omnis hic blanditiis dolores ab et nam similique.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Dolorem qui provident eligendi voluptas.",
        "body": "Alias quidem culpa ratione voluptas aliquid et minus sunt. In recusandae numquam cum voluptas id aperiam. Ea iusto laborum. Voluptates quia a dicta delectus et exercitationem earum qui. Quidem temporibus tempore nesciunt reprehenderit in eaque asperiores." +
            "Consequatur eveniet doloribus sunt exercitationem repellendus. Nulla blanditiis aut dolores placeat perferendis rerum vel exercitationem. Quo quas optio eos quam id exercitationem commodi at corporis." +
            "Molestias reiciendis earum aut nam. Ullam non fuga nihil ab quia sit ut iste. Vitae possimus alias itaque reiciendis sunt beatae dicta eligendi repudiandae. Laborum quibusdam facere ex et magni tempore laborum. Eos non soluta neque modi non eveniet provident sit qui. Aut veritatis quia odio quia doloremque.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Quia aliquid qui blanditiis laborum qui repudiandae aut rerum.",
        "body": "Expedita consequatur eum dicta quibusdam iste quo iure voluptates placeat. Sit eum commodi reiciendis itaque deserunt ipsam. Tempora voluptas illum nulla et. Vero dolorum ut facilis voluptas. Adipisci impedit sint mollitia dolores quis in dolores." +
            "Odio similique cumque esse delectus similique reiciendis ea. Fugit fugit sit sint non ut tenetur. Tempora rem pariatur id architecto dolores ducimus voluptas aliquid explicabo. Et non totam aliquam dolores quia possimus. Vel nisi dolorem non." +
            "Enim optio numquam corporis eos sunt et dolorem. Nam excepturi odio ullam earum optio dolorem magnam autem. Illum voluptatem modi maxime veniam ducimus.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Doloribus nobis et esse nesciunt commodi non consequuntur.",
        "body": "Quaerat quam voluptatibus reprehenderit animi reiciendis magni officia eum ab. Porro aut blanditiis rerum et. Aperiam laudantium ipsa suscipit nostrum et. Et ut commodi. Laudantium molestiae rerum dolores." +
            "Aliquid ducimus eum quia nesciunt similique officiis minima. Quia consectetur voluptatem non. Ipsa id quia tenetur vitae ipsum expedita saepe itaque illo." +
            "Reiciendis id quis. Possimus rerum ex animi nam vel. Quibusdam et enim repellat beatae beatae numquam. Quis a libero cumque officiis et voluptatem aut. Dolorem aspernatur maxime excepturi deserunt voluptate quas. Dolorem minus voluptas non vel aut.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Sequi velit quisquam.",
        "body": "Eum ea exercitationem. Facilis assumenda nesciunt dolorem sequi. Ut ipsum eveniet incidunt praesentium sunt et animi. Soluta ad aut nisi cum suscipit. Id omnis ut laborum tempora aliquam fugit et explicabo mollitia." +
            "Placeat repellat voluptate earum. Consequatur voluptatem et voluptatem officia numquam consequatur. Et autem ut quasi occaecati libero. Eius tempora odit ea qui ipsum voluptatem ad. In ut libero ut." +
            "Quod reprehenderit libero iste omnis iusto error quam nam ex. Eum odio voluptas aut animi rerum odio sed ut. Nobis placeat excepturi. Reiciendis tempore repellendus fugit inventore. Tenetur ut ullam voluptatem assumenda earum earum.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Qui vero velit modi eos libero sapiente.",
        "body": "Unde sapiente sit ratione beatae corporis et eligendi commodi perferendis. Quis dolorem iure modi voluptas consequuntur voluptatibus. Neque laborum fugit necessitatibus. Asperiores optio illum quod ut suscipit totam asperiores incidunt." +
            "Eos corrupti voluptatem voluptas quia. Voluptatem vero tempora dignissimos sed. Tempore odit delectus aliquam maxime porro numquam." +
            "Atque omnis dolor rem sapiente officiis veniam. Nostrum quisquam ratione voluptate. Repellat adipisci repellendus voluptate neque quibusdam pariatur. Corporis aut velit beatae. Voluptate tempore modi. Aut sint provident provident consectetur tempore incidunt nesciunt.",
        "article_id": 2,
        "picture_url": null
      },
      {
        "header": "Ab sit quae consectetur.",
        "body": "Voluptas sed laboriosam. Accusantium quia veniam accusamus sit illo quasi dolorem assumenda. Voluptatem porro et quod placeat porro ea. Aut et tenetur ad tempora eum. Maxime similique ut. Laudantium eum iusto harum laborum deleniti fugit." +
            "Maiores amet non corporis dolore magni hic aut quis non. Rem dolore dolore. Consectetur eum vitae numquam debitis sit pariatur qui corrupti facere. Ut voluptate mollitia. Qui omnis fugiat dolor non. Nesciunt labore vitae sed facilis." +
            "Sit numquam sint voluptatum saepe ut sit. In eaque vel consectetur corporis sequi. Nisi aliquid maxime expedita qui officia natus excepturi consectetur. Maiores illum et nam in deleniti quasi. Quaerat sed consequatur recusandae in sint. Blanditiis odit nostrum voluptatem incidunt quia perferendis nostrum.",
        "article_id": 2,
        "picture_url": null
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Sections', null)
  }
};

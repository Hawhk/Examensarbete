CREATE TABLE IF NOT EXISTS articles (
    id SERIAL PRIMARY KEY,
    header varchar(255),
    sub_header varchar(255),
    description varchar(255),
    date_posted timestamp WITHOUT TIME ZONE,
    posted_by varchar(128)
);


CREATE TABLE IF NOT EXISTS sections (
    id SERIAL PRIMARY KEY,
    header varchar(255),
    body text,
    article_id int REFERENCES articles(id)
);

TRUNCATE TABLE sections CASCADE;
TRUNCATE TABLE articles CASCADE;

INSERT INTO articles
VALUES (
	1,
    'Ullam veritatis consectetur est.',
    'Sint quibusdam quibusdam voluptatem',
    'Eum voluptate qui. Et aut iste autem nemo id ipsa est quae laborum. Soluta sed quidem ut. Repellat voluptatum eius omnis assumenda suscipit quas illo.',
    NOW(),
    'Darlene Brakus'
);

INSERT INTO sections(header, body, article_id)
VALUES (
    'Ut dolor necessitatibus magnam qui repellat.',
    'Dolor rerum provident repellendus quis sequi quasi dolorem quidem porro. Odit qui aperiam et illum reprehenderit officia dignissimos error. Aut omnis incidunt iusto et sit tempore assumenda sed rerum.
 Omnis consequatur neque. Iure laudantium aspernatur quia corrupti vel distinctio impedit ut ut. Quis est quod hic. Dicta quis illum aspernatur sit nam incidunt. Aliquam corporis ut et maiores doloribus illum eaque sint. Optio quia nam laudantium.
 Qui eos sequi facere nam. Quam odit possimus deleniti quos amet aut sint debitis eius. Tempore a vitae similique sit veritatis cum quasi. Quas cumque dicta et. Cupiditate eius eaque velit neque sit.',
    1
),
(
    'Dolorum facilis sed molestiae mollitia blanditiis.',
    'Unde aut adipisci unde praesentium perspiciatis voluptatem iure nisi excepturi. Iste modi voluptatum dolorum. Ut ad odio aut accusantium aliquam tempora deserunt qui distinctio. Tempora illo blanditiis.
Totam quas fuga quibusdam provident vel. Repellat enim consequatur excepturi temporibus exercitationem. Accusantium molestias dolores cum delectus labore qui. Aspernatur similique dignissimos. Ut tempore pariatur. Deserunt sit aliquid sit et et neque earum delectus.
Velit nihil totam. Consequatur et culpa ipsum sed. Sint ipsum sed et in sequi ut dolore autem architecto.',
    1
);
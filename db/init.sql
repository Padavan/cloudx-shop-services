CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    price INT,
    image TEXT
);
INSERT INTO products (id, title, description, price, image)
values (
    'e9072322-247c-4c8b-a8ef-a91fc3536926',
    'Almond Pretzel',
    'Description',
    100,
    'https://bread-cloud.s3.eu-central-1.amazonaws.com/almond-pretzel.jpg'
    ),
(
    '8bd7919e-f987-4d1a-b927-7d82d7fcb1fd',
    'Baguette',
    'Description',
    100,
    'https://bread-cloud.s3.eu-central-1.amazonaws.com/baguette.jpg'
    ),
(
    '36143fbf-0d67-43de-990d-d75be7fb361f',
    'Chiffon Bread',
    'Description',
    100,
    'https://bread-cloud.s3.eu-central-1.amazonaws.com/chiffon-bread.jpg'
    ),
(
    '295f3947-afd6-4516-b2a4-19f596c26d87',
    'Chocolate Bread',
    'Description',
    100,
    'https://bread-cloud.s3.eu-central-1.amazonaws.com/chocolate-bread.jpg'
    ),
(
    '5c11c2cc-2a70-4d8e-b330-67764c4acdd4',
    'Cinnamon Roll',
    'Description',
    100,
    'https://bread-cloud.s3.eu-central-1.amazonaws.com/cinnamon-roll.jpg'
    ),
(
    '85836a96-f652-4aec-b624-41b69370535f',
    'Macadamica Chocolate Bread',
    'Description',
    100,
    'https://bread-cloud.s3.eu-central-1.amazonaws.com/macadamica-chocolate-bread.jpg'
    ),
(
    'ef392f23-6b13-408f-bf72-4ee39b4bbc69',
    'Mapple French Bread',
    'Description',
    100,
    'https://bread-cloud.s3.eu-central-1.amazonaws.com/mapple-french-bread.jpg'
    ),
(
    'cd84b8e9-0e95-4c15-9763-02c5aebabfb0',
    'Melon Pan',
    'Description',
    100,
    'https://bread-cloud.s3.eu-central-1.amazonaws.com/melon-pan.jpg'
    ),
(
    '71b0995a-06ac-42c4-9b22-ce25d31b5ced',
    'Onion Galette',
    'Description',
    100,
    'https://bread-cloud.s3.eu-central-1.amazonaws.com/onion-galette.jpg'
    ),
(
    '040bc208-9662-4c32-8dd2-8fc7f9063f5a',
    'Pan Au Traditionel',
    'Description',
    100,
    'https://bread-cloud.s3.eu-central-1.amazonaws.com/pan-au-traditionel.jpg'
    ),
(
    'd92ca866-2c2c-4a9b-a5bc-584dd7d028dd',
    'Raisin Bread',
    'Description',
    100,
    'https://bread-cloud.s3.eu-central-1.amazonaws.com/raisin.jpg'
    );


CREATE TABLE IF NOT EXISTS stocks (
    id TEXT PRIMARY KEY,
    count INT
);
INSERT INTO products (id, count)
values (
    'e9072322-247c-4c8b-a8ef-a91fc3536926',
    0
),
(
    '8bd7919e-f987-4d1a-b927-7d82d7fcb1fd',
    0
),
(
    '36143fbf-0d67-43de-990d-d75be7fb361f',
    0
),
(
    '295f3947-afd6-4516-b2a4-19f596c26d87',
    0
),
(
    '5c11c2cc-2a70-4d8e-b330-67764c4acdd4',
    0
),
(
    '85836a96-f652-4aec-b624-41b69370535f',
    0
),
(
    'ef392f23-6b13-408f-bf72-4ee39b4bbc69',
    0
),
(
    'cd84b8e9-0e95-4c15-9763-02c5aebabfb0',
    0
),
(
    '71b0995a-06ac-42c4-9b22-ce25d31b5ced',
    0
),
(
    '040bc208-9662-4c32-8dd2-8fc7f9063f5a',
    0
),
(
    'd92ca866-2c2c-4a9b-a5bc-584dd7d028dd',
    0
),
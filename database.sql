create table categories
(
	id int auto_increment
		primary key,
	name varchar(45) null,
	createdAt datetime not null,
	updatedAt datetime not null,
	parent_id int null,
	constraint categories_ibfk_1
		foreign key (parent_id) references categories (id)
			on update cascade on delete set null
);

create index parent_id
	on categories (parent_id);

create table products
(
	id int auto_increment
		primary key,
	name varchar(45) null,
	image_uri varchar(255) null,
	createdAt datetime not null,
	updatedAt datetime not null,
	categoryId int null,
	constraint products_ibfk_1
		foreign key (categoryId) references categories (id)
			on update cascade on delete set null
);

create index categoryId
	on products (categoryId);

create table providers
(
	id int auto_increment
		primary key,
	name varchar(45) null,
	createdAt datetime not null,
	updatedAt datetime not null
);

create table product_providers
(
	`double` double null,
	available tinyint(1) null,
	createdAt datetime not null,
	updatedAt datetime not null,
	productId int not null,
	providerId int not null,
	primary key (productId, providerId),
	constraint product_providers_ibfk_1
		foreign key (productId) references products (id)
			on update cascade on delete cascade,
	constraint product_providers_ibfk_2
		foreign key (providerId) references providers (id)
			on update cascade on delete cascade
);

create index providerId
	on product_providers (providerId);


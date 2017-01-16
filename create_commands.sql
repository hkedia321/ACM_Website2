CREATE TABLE contact(
id int AUTO_INCREMENT,
name varchar(60),
email varchar(120),
subject varchar(200),
message text,
primary key(id)
);
CREATE TABLE subscribe(
id int AUTO_INCREMENT,
email varchar(120) NOT NULL,
primary key(id)
);
CREATE TABLE uploads(
id int AUTO_INCREMENT,
name varchar(120) NOT NULL,
primary Key(id)
);
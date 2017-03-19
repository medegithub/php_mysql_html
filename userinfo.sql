SET NAMES UTF8;

DROP DATABASE IF EXISTS userinfo;
CREATE DATABASE userinfo CHARSET=UTF8;

USE userinfo;

CREATE TABLE user_msg(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upsw VARCHAR(1),
	uweb VARCHAR(4),
	uage INT,
	ubirthday VARCHAR(50)
);

INSERT INTO user_msg VALUES ('1','qiangdong','123456896','hjk','89','76');

CREATE TABLE goods(
	gid INT PRIMARY KEY AUTO_INCREMENT,
	uid INT,
	gname VARCHAR(500),
	gpic VARCHAR(100),
	gprice FLOAT(10,2)
);







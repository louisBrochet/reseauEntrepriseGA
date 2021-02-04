INSERT INTO `messagerie`.`virtual_domains`
(`id` ,`name`)
VALUES
('1', 'activaccinbx.ephec-ti.org');

INSERT INTO `messagerie`.`virtual_users`
(`id`, `domain_id`, `password` , `email`, `maildir`)
VALUES
('1', '1', ENCRYPT('linux', CONCAT('$6$', SUBSTRING(SHA(RAND()), -16))), 'bob@activaccinbx.ephec-ti.org', 'activaccinbx.ephec-ti.org/bob/');
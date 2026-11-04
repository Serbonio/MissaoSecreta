CREATE TABLE `espioes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nome` varchar(100) NOT NULL,
	`email` varchar(150) NOT NULL,
	`password_hash` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `espioes_id` PRIMARY KEY(`id`),
	CONSTRAINT `espioes_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `missoes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titulo` varchar(100) NOT NULL,
	`descricao` text,
	`status` enum('pendente','em_andamento','concluida') NOT NULL DEFAULT 'pendente',
	`espiao_id` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `missoes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `missoes` ADD CONSTRAINT `missoes_espiao_id_espioes_id_fk` FOREIGN KEY (`espiao_id`) REFERENCES `espioes`(`id`) ON DELETE cascade ON UPDATE no action;
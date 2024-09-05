CREATE TABLE `qr_values` (
	`id` integer PRIMARY KEY NOT NULL,
	`value` text NOT NULL,
	`scan_count` integer DEFAULT 0
);

import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const qrValues = sqliteTable("qr_values", {
    id: integer("id").primaryKey(),
    value: text("value").notNull(),
    scan_count: integer("scan_count").default(0),
});

export type QRValue = typeof qrValues.$inferSelect;
export type NewQRValue = typeof qrValues.$inferInsert;

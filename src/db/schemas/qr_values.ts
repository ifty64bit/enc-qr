import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const qrValues = sqliteTable("qr_values", {
    id: integer("id").primaryKey(),
    value: text("value").notNull(),
});

export type QRValue = typeof qrValues.$inferSelect; 
export type NewQRValue = typeof qrValues.$inferInsert; 

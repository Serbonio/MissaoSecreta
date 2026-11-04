import {
    mysqlTable, 
    int, 
    varchar, 
    text,
    timestamp,
}from "drizzle-orm/mysql-core"

export const espioes = mysqlTable("espioes", {
    id: int("id").primaryKey().autoincrement(),
    nome: varchar("nome", {length:100}).notNull(),
    email: varchar("email", {length:150}).notNull().unique(),
    password_hash: text("password_hash").notNull(),
    created_at: timestamp("created_at").defaultNow().notNull()
})
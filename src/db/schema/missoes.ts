import{
    mysqlTable, 
    int, 
    varchar, 
    text, 
    mysqlEnum, 
    timestamp
}from "drizzle-orm/mysql-core";

import {espioes} from "./espioes";

export const missoes = mysqlTable("missoes", {
    id: int("id").autoincrement().primaryKey(),
    titulo: varchar("titulo", {
        length:100}).
        notNull(),
    descricao: text("descricao"),
    
    status: mysqlEnum("status", [
        "pendente",
        "em_andamento",
        "concluida"
    ]).default("pendente").notNull(),
    
    espiaoId: int("espiao_id")
    .notNull()
    .references( ()=> espioes.id, {
        onDelete:"cascade",
    }),

    created_at: timestamp("created_at").notNull().defaultNow(),

})
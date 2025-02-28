import { sqliteTable, integer, text, real} from 'drizzle-orm/sqlite-core';

export const admins = sqliteTable('admins', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    username: text('username', { length: 50 }).notNull().unique(),
    password: text('password').notNull(),
    email: text('email', { length: 100 }).notNull().unique()
});

export const donantes = sqliteTable('donantes', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    nombre: text('nombre', { length: 100 }).notNull(),
    telefono: text('telefono', { length: 20 }),
    email: text('email', { length: 100 }),
    direccion: text('direccion', { length: 150 })
});

export const categorias = sqliteTable('categorias', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    nombre: text('nombre', { length: 50 }).notNull(),
    descripcion: text('descripcion', { length: 255 })
});

export const donaciones = sqliteTable('donaciones', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    donanteId: integer('donante_id')
        .notNull()
        .references(() => donantes.id),
    descripcion: text('descripcion', { length: 255 }).notNull(),
    fechaDonacion: text('fecha_donacion').notNull(), //SQlite no tiene DATE, manejar en Formato (YYYY-MM-DD).
    valorAproximado: real('valor_aproximado'), 
    recibida: integer('recibida').notNull().default(0),
    categoriaId: integer('categoria_id')
        .notNull()
        .references(() => categorias.id)
});



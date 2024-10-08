import { Coffee } from "src/coffees/entities/coffee.entity";
import { Flavor } from "src/coffees/entities/flavor.entity";
import { CoffeeRefactor1724865567781 } from "src/migrations/1724865567781-CoffeeRefactor";
import { DataSource } from "typeorm";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: [Coffee, Flavor],
    migrations: [CoffeeRefactor1724865567781],
  });
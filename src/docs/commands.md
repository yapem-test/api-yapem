# Gerar uma migration
npx sequelize-cli migration:generate --name produtos

# Rodar todas Migrations
npx sequelize-cli db:migrate

# Desfazer uma Migration
npx sequelize-cli db:migrate:undo

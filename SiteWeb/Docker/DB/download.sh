sudo curl -o docker-compose.yml https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/docker-compose.yml

sudo mkdir script
sudo curl -o script/db-init.sql https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/script/db-init.sql
sudo curl -o script/db-data.sql https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/script/db-data.sql

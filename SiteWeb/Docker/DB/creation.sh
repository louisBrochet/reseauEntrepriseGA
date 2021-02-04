sudo apt-get -y install docker
sudo apt-get -y install docker-compose

sudo mkdir DB

sudo curl -o DB/docker-compose.yml https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/docker-compose.yml

sudo mkdir DB/script
sudo curl -o DB/script/db-init.sql https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/script/db-init.sql
sudo curl -o DB/cript/db-data.sql https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/script/db-data.sql

sudo cd ..

sudo mkdir api
sudo curl -o api/app.js https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/api/app.js
sudo curl -o api/database.js https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/api/database.js
sudo curl -o api/docker-compose.yml https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/api/docker-compose.yml
sudo curl -o api/package.json https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/api/package.json
sudo curl -o api/package-lock.json https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/api/package-lock.json

sudo cd api
sudo mkdir rdv
sudo curl -o rdv/rdv.controller.js https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/api/rdv/rdv.controller.js
sudo curl -o rdv/rdv.router.js https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/api/rdv/rdv.router.js
sudo curl -o rdv/rdv.service.js https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/api/rdv/rdv.service.js

sudo docker-compose up -d

sudo cd ..

sudo cd DB
sudo docker-compose up -d

sudo docker exec -it db_db_1 bash -l

mysql -u user -p

sudo apt-get -y install docker
sudo apt-get -y install docker-compose

sudo mkdir DB

sudo curl -o DB/docker-compose.yml https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/docker-compose.yml

sudo mkdir DB/script
sudo curl -o DB/script/db-init.sql https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/script/db-init.sql
sudo curl -o DB/cript/db-data.sql https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/script/db-data.sql

sudo cd DB
sudo docker-compose up -dls

sudo docker exec -it db_db_1 bash -l

mysql -u user -p

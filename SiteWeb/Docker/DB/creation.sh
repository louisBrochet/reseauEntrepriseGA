sudo apt-get -y install docker
sudo apt-get -y install docker-compose

mkdir DB

curl -o DB/docker-compose.yml https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/docker-compose.yml

mkdir script
curl -o DB/script/db-init.sql https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/script/db-init.sql
curl -o DB/cript/db-data.sql https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/DB/script/db-data.sql

sudo docker-compose up -d



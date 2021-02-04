sudo apt-get -y install docker
sudo apt-get -y install docker-compose

sudo mkdir api
sudo mkdir api/rdv

sudo curl -o api/docker-compose.yml https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/API/docker-compose.yml
sudo curl -o api/app.js https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/API/api/app.js
sudo curl -o api/database.js https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/API/api/database.js
sudo curl -o api/package.json https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/API/api/package.json
sudo curl -o api/package-lock.json https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/API/api/package-lock.json
sudo curl -o api/rdv/rdv.controller.js https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/API/api/rdv/rdv.controller.js
sudo curl -o api/rdv/rdv.router.js https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/API/api/rdv/rdv.router.js
sudo curl -o api/rdv/rdv.service.js https://raw.githubusercontent.com/louisBrochet/reseauEntrepriseGA/site_web/SiteWeb/Docker/API/api/rdv/rdv.service.js

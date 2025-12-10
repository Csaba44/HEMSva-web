<img src="https://github.com/favicon.ico" width="48">

# HEMS Hungary Virtual
A HEMS Hungary Virtual projekt célja, hogy a Magyar Légimentő Nonprofit Kft. együttműködésében megvalósítsa a légimentők repülési üzemeinek realisztikus szimulációját, mindenki számára elérhető szimulációs platformokon. Az alkalmazás egy webes valamint egy asztali alkalmazásból áll, ez a repository a webes felület megvalósítására, és az API elkészítésére használatos.

## Technológiák
#### Adatbázis
- MySQL adatbázis
- Adatbázis tervezése: [drawdb](https://www.drawdb.app/editor?shareId=756b98669fd32dc9e8c5027ac973fa8f)
#### Docker
- Docker Compose
#### Backend
- Laravel
- Sanctum
- Eloquent ORM
- API Dokumentáció: [Postman](https://documenter.getpostman.com/view/29991714/2sB3dSP8Ka)
#### Frontend
- React
- *: TBD

## Futtatás helyi számítógépen
A helyi futtatáshoz használja a következő lépéseket:
```
git clone https://github.com/Csaba44/HEMSva-web.git
cd HEMSva-web
```
Készítse el a .env.example másolatát .env néven a gyökérkönyvtárban

#### FRONTEND
Készítse el a hemsva_frontend/.env.example másolatát .env néven
Maptiler api key: https://cloud.maptiler.com/account/keys/
```
cd hemsva_api
composer install
```

#### API
Készítse el a hemsva_api/.env.example másolatát .env néven
```
cd hemsva_api
npm install
```

#### Futtatás
```
docker-compose up -d
docker exec -it hemsva_api php artisan key:generate
```

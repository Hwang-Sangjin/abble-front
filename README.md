# abble-front

Metaverse by three.js

![tree](images/tree.png)

## How to run

```bash
$ npm install
$ npm run start
```

## How to build and start this project with Docker

```bash
# build
docker build --target server -t abble-front .

# run
docker run -p 3000:80 abble-front
```
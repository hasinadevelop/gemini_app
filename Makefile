docker.compose:
	docker-compose up
.PHONY: docker.compose

docker.compose.d:
	docker-compose up -d
.PHONY: docker.compose.d

docker.init:
	${MAKE} docker.compose.d
	docker exec -it gemini_app sh -c "npm i; npm i -g nodemon; npm run watch;"
.PHONY: docker.init

init:
	cd app; npm i; npm i -g nodemon;
.PHONY: init

docker.stop:
	docker-compose stop
.PHONY: docker.stop

docker.sh:
	docker exec -it gemini_app sh
.PHONY: docker.sh

docker.npm.watch:
	docker exec -it gemini_app sh -c "npm run watch;"
.PHONY: docker.npm.watch

docker.npm.start:
	docker exec -it gemini_app sh -c "npm run start;"
.PHONY: docker.npm.start

npm.watch:
	cd app; npm run watch;
.PHONY: npm.watch

npm.start:
	cd app; npm run start;
.PHONY: npm.start



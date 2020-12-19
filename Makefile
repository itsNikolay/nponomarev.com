.PHONY: server

server:
	yarn dev

watch:
	yarn test-watch

lint:
	yarn run eslint --fix ./

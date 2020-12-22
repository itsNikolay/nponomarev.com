.PHONY: server

server:
	yarn dev

watch:
	yarn test-watch

eslint:
	yarn run eslint --fix ./lib ./components ./pages

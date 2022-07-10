install: #установка 
	npm ci

publish: #публикация пакета
	npm publish --dry-run

lint: #линтер
	npx eslint .
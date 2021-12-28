docker-build:
			docker build -t toolbox-ui .
docker-run:
			docker run -it -p 8003:80 --rm --name toolbox-ui toolbox-ui

FROM golang:1.12

# Expose port
ENV PORT 9090
ENV GOPATH /go
ENV GO111MODULE on
EXPOSE 9090

# Override the base log level (info)
ENV NPM_CONFIG_LOGLEVEL warn

# Update and install system dependencies
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update
RUN apt-get install -y nodejs
RUN npm install -g yarn

# Create workdir
RUN mkdir -p portfolio-web
WORKDIR /portfolio-web

# Install package dependencies
COPY package.json package.json
RUN yarn install

# Copy project files into image
COPY . .

RUN yarn run build

CMD ["yarn", "run", "start"]

FROM node:14.0.0 as myImage
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --ignore-engines
COPY . ./
RUN yarn build

FROM nginx:1.12-alpine
COPY --from=myImage /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

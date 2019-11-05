FROM caocaocao/web:latest
WORKDIR /app
COPY . ./
RUN apk add ncurses \
&& npm config set registry https://registry.npm.taobao.org \
&& npm audit fix \
&& npm install \
&& npm run build
CMD npm run start
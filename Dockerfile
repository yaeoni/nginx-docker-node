# 부모 이미지 지정
FROM node:carbon

RUN mkdir -p /app

WORKDIR /app

ADD ./ /app
RUN npm install

EXPOSE 8000
# 실행 명령
CMD [ "node", "index.js" ]
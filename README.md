## 1. 도커 설치

https://docs.docker.com/engine/install

## 2. node 이미지 설치

https://hub.docker.com/_/node

```
$ docker pull node
```

## 3. .dockerignore 작성(node_modules / lock.json 제외용도)

## 4. Dockerfile 작성

```
FROM // 이미지 버전
WORKDIR // 컨테이너 작업 공간(파일을 넣거나 진입했을 때의 기준점)
COPY // WORKDIR 기준으로 파일 복사(소스 추가)
RUN // 명령어 수행( + 의존성 설치)
CMD // 실행 명령
EXPOSE // 포트 매핑
```

## 5. docker image 빌드

```
$ docker build --tag 레포지토리명:버전 태그 [Dockerfile 경로]
```

## 6. 생성된 이미지로 컨테이너 생성 및 실행

도커를 이용해 여러개의 서버를 띄울 수 있다.

```
$ docker create --name [서버 이름] -p [외부 포트:컨테이너 내부 포트] [이미지명:버전 태그]

// 컨테이너 확인 (-a : 실행중이지 않은 컨테이너 포함)
$ docker ps -a

// 실행
$ docker start 서버명
```

### 출저

http://labs.brandi.co.kr/2018/05/25/kangww.html

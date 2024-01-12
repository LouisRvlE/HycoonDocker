FROM alpine:latest as build

ARG PB_VERSION=0.19.4

RUN apk add --no-cache \
    unzip \
    ca-certificates

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

COPY ./pb_migrations /pb/pb_migrations
COPY ./pb_data /pb/pb_data

FROM alpine:latest as prod

COPY --from=build /pb/ /pb/

CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]
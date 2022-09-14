# syntax=docker/dockerfile:1
FROM node:16.16.0-alpine

WORKDIR /root/code

COPY [".", "."]

RUN apk add qpdf

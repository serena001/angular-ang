FROM tomcat:8-alpine
MAINTAINER mgchow5007@gmail.com
WORKDIR /usr/local/tomcat/webapps
COPY /dist/ /usr/local/tomcat/webapps 
EXPOSE 8080
CMD ["catalina.sh","run"]  
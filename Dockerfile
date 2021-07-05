FROM node:12.18-slim
RUN npm i -g create-react-app
RUN echo "fs.inotify.max_user_watches=288" >  /etc/sysctl.conf
RUN apt-get update 
#RUN sysctl -p
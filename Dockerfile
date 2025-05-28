FROM nginx

RUN rm etc/nginx/conf.d/default.conf

COPY nginx.conf etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html

COPY index.html main.js ./

CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]
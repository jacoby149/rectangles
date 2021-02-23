FROM php:7.3-apache
RUN apt-get update --fix-missing
RUN apt-get install -y git
WORKDIR /var/www/html
COPY rectangles/vhost.conf /etc/apache2/sites-available/000-default.conf
RUN chown -R www-data:www-data /var/www/html && a2enmod rewrite
COPY . .
RUN ls
RUN chmod -R 777 /var/www/html
EXPOSE 80
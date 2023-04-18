FROM php:8.2-fpm

RUN apt-get update && apt-get install -y apt-utils

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libpng-dev \
    libssl-dev \
    libmemcached-dev \
    libz-dev \
    libzip-dev\
    zlib1g-dev \
    libsqlite3-dev \
    zip \
    libxml2-dev \
    libcurl3-dev \
    libedit-dev \
    libpspell-dev \
    libldap2-dev \
    unixodbc-dev \
    libpq-dev \
    curl \
    nmap \
    nano \
    inetutils-ping \
    libonig-dev

RUN docker-php-ext-install mysqli pdo pdo_mysql
RUN apt remove nodejs
RUN rm -rf /usr/local/bin/node*
RUN rm -rf /usr/local/bin/npm*
RUN rm -rf /etc/apt/sources.list.d/nodesource.list

RUN curl -sL https://deb.nodesource.com/setup_19.x | bash -

RUN apt-get update && apt-get install -y nodejs

RUN apt-get update

RUN npm install -g @vue/cli

ADD https://raw.githubusercontent.com/mlocati/docker-php-extension-installer/master/install-php-extensions /usr/local/bin/

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions
RUN docker-php-ext-install mbstring
RUN docker-php-ext-install zip
RUN docker-php-ext-install exif
RUN docker-php-ext-install pcntl
RUN docker-php-ext-enable pdo_mysql

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Change current user to root
USER root

# Copy existing application directory permissions
RUN usermod -u 1000 www-data

WORKDIR /var/www

# Expose port 9000 and start php-fpm server
CMD ["php-fpm"]

EXPOSE 9000

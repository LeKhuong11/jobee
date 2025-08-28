FROM php:8.2-fpm-alpine

# Cài đặt các thư viện cần thiết
RUN apk add --no-cache \
    libpq \
    libzip \
    libpng \
    libjpeg-turbo \
    oniguruma \
    libxml2 \
    git \
    # Thư viện phát triển (chỉ cần để build extension)
    libpq-dev \
    libzip-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    oniguruma-dev \
    libxml2-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo_pgsql pgsql mbstring zip exif pcntl gd xml bcmath \
    # Xóa thư viện phát triển để giảm kích thước image
    && apk del --no-cache libpq-dev libzip-dev libpng-dev libjpeg-turbo-dev oniguruma-dev libxml2-dev

# Cài đặt Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Thiết lập thư mục làm việc
WORKDIR /var/www/html

# Copy mã nguồn
COPY . /var/www/html

# Cài đặt dependencies
RUN composer install --optimize-autoloader --no-dev --no-scripts

# Tối ưu Laravel
RUN php artisan config:cache \
    && php artisan route:cache

# Phân quyền
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage /var/www/html/bootstrap/cache

# Mở port cho PHP-FPM
EXPOSE 9000

CMD ["php-fpm"]
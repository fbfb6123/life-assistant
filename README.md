# life-assistant

## Overview
This is SPA application to help your life

## Link 
http://3.114.220.168/

## Demo
![Animated GIF-downsized](https://user-images.githubusercontent.com/60612010/107612420-928d8680-6c89-11eb-85b6-12b365d03761.gif)



## Development 
 <pre># Create Sample by life-assistant
git clone https://github.com/fbfb6123/life-assistant.git
cd life-assistant
composer install

php artisan preset react
php artisan key:generate

npm install

# Build Static Pages(/public)
npm run dev</pre><br>

## Requirements
- PHP 7.3
- Laravel 8

- React 7.3

- MySQL 8
- Docker 20.10.2


## Installation
### composer.json
<pre>"php": "^7.3|^8.0",
     "fideloper/proxy": "^4.4",
     "fruitcake/laravel-cors": "^2.0",
     "guzzlehttp/guzzle": "^7.0.1",
     "laravel/framework": "^8.12",</pre><br>


### package.json
<pre>"@babel/preset-react": "^7.12.10",
        "axios": "^0.19",
        "bootstrap": "^4.0.0",
        "cross-env": "^7.0",
        "jquery": "^3.2",
        "laravel-mix": "^5.0.1",
        "lodash": "^4.17.19",
        "popper.js": "^1.12",
        "react": "^16.2.0",
        "react-dom": "^16.2.0",
        "redux-devtools": "^3.7.0",
        "resolve-url-loader": "^3.1.0",
        "sass": "^1.15.2",
        "sass-loader": "^8.0.0"</pre><br>

## movere DB

## incomesTable
|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|amount|integer|null: false
|year|integer|null: false|
|month|integer|null: false|



## expensesTable
|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|amount|integer|null: false
|year|integer|null: false|
|month|integer|null: false|

## Scheduled to be added
- Delete function
- Responsive design
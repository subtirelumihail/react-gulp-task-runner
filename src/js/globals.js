'use strict';

module.exports = {

    appController: null,
    appRouter: null,
    apiUrl: process.env.target !== 'production' ? 'http://localdocker:8080/' : '/',

};

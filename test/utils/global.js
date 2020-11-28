const supertest = require('supertest')

const app = (process.env.TEST === 'sanity') ? 'http://localhost:3000' : require('../../src/app')

global.request = supertest(app)

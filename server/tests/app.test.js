const request = require('supertest');
const yup = require('yup');
const { expect } = require('chai');
const app = require('./../app');

// request(app)
//   .method('/path')
//   .set('Header','value') - установка заголовков
//   .send(тело) - установка тела запроса
//   .expect('Header','value') - проверка пришедшего с ответом заголовка
//   .expect(statusCode)
//   .expect('Response')

//   .end(done)
// или
//   .end((err,res)=>{
//     if(err) {return done(err)}
//     проверка res.body
//     done()
//   })
// или
//   .then(res=>{ проверка res.body; done()})
//   .catch(err=>done(err))

const userCredentials = { email: 'buyer@gmail.com', password: '123456' };

const TOKEN_VALIDATION_SCHEMA = yup.object({
  token: yup
    .string()
    // .matches(/^\w+\.\w+\.\w+$/)
    .required(),
});

describe('Testing app', function () {
  describe('Testing public endpoints', function () {
    it('response should be [] when GET /offers', function (done) {
      request(app)
        .get('/offers')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch(err => done(err));
    });

    describe('POST /auth/login', function () {
      it('response should be 200 {token:"tokenString"} Content-Type json when valid login/passw (user exists)', function (done) {
        request(app)
          .post('/auth/login')
          .send(userCredentials)
          .expect(200)
          .expect('Content-Type', /json/)
          .then(res => {
            expect(TOKEN_VALIDATION_SCHEMA.isValidSync(res.body)).to.be.true;
            done();
          })
          .catch(err => done(err));
      });

      it('response should be 400 "Invalid data for login" when invalid email', function (done) {
        request(app)
          .post('/auth/login')
          .send({ email: 'buyer', password: '123456' })
          .expect(400)
          .expect('Invalid data for login')
          .end(done);
      });

      it('response should be 404 "user with this data didn`t exist" when valid login/passw (user doesn`t exist)', function (done) {
        request(app)
          .post('/auth/login')
          .send({ email: 'buyer1@gmail.com', password: '123456' })
          .expect(404)
          .expect('user with this data didn`t exist')
          .end(done);
      });
    });
  });
  describe('Testing private endpoints', function () {
    let token;

    before(function (done) {
      request(app)
        .post('/auth/login')
        .send(userCredentials)
        .then(res => {
          token = res.body.token;
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    describe('GET /auth/getUser', function () {
      it('response should be 200 res.body.email=userCredentials.email Content-Type json when valid token', function (done) {
        request(app)
          .post('/auth/getUser')
          .set('Authorization', token)
          .expect(200)
          .expect('Content-Type', /json/)
          .then(res => {
            expect(res.body.email).to.be.equal(userCredentials.email);
            done();
          })
          .catch(err => done(err));
      });
      //
    });
  });
});

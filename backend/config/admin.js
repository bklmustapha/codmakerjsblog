module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0a26683f5bba1fc8db51d298b6d7f111'),
  },
});

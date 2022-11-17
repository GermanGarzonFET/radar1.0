module.exports = {

    port: process.env.PORT || 5000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/dataGeo2',
    SECRET_KEY: 'secret_key',
    directory:__dirname,
    admin_email: 'admin@correo',
    admin_password: 'admin'

}

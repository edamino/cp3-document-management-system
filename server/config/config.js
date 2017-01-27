const configurations= {
  development: {
    username: 'Andela',
    password: 'andela2016',
    database: 'cp3_dms_development',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: null,
    database: 'cp3_dms_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'root',
    password: 'null',
    database: 'cp3_dms_production',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
}

export default configurations;
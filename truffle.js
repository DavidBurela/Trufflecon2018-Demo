module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  // truffle.js - specify mocha output options
mocha: {
  reporter: "mocha-junit-reporter",
  reporterOptions: {
    mochaFile: 'TEST-truffle.xml'
  }
}
};

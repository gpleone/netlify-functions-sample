exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'world'
  return {
    statusCode: 200,
    body: `Hallo ${subject}`
  }
}
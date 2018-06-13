/*var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello W9rld!");
    
	joep();

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

*/
    
const { IncomingWebhook, WebClient } = require('@slack/client');

console.log('GGGetting started with Slack Developer Kit for Node.js');

const web = new WebClient(process.env.SLACK_TOKEN);
const timeNotification = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);
const currentTime = new Date().toTimeString();

timeNotification.send('The current time is ${currentTime}');

/*, (error, resp) => {
  if (error) {
    return console.error(error);
  }
  const zoekTerm = "nederland";
  console.log('Notification sent');
  console.log('Waiting a few seconds for search indexes to update...');
  setTimeout(() => {
    console.log('Calling search.messages');
    web.search.messages({ query: zoekTerm })
      .then(resp => {
        if (resp.messages.total > 0) {
          console.log('First match:', resp.messages.matches[0]);
        } else {
          console.log('No matches found');
        }
      })
      .catch(console.error)
  }, 10);
});
*/



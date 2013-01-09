simple-push
===========

An example of a simple way to push events to browsers


Introduction
------------
This is intended to show people that have existing web applications how they can quickly add asynchronous notifications to their current application.

Setup
-----
You'll need the following:
  - node.js/npm
  - HAProxy
  - Control of your hosting environment
  
You'll need to move your current server (Apache, nginx, etc.) off of port 80. This assumes you moved it to port 81, but any port should work.

You'll need to set up HAProxy to listen port 80, redirect most requests to your normal HTTP Server, and any requests to /socket.io/* or Websocket requests to your new node server. There is a sample haproxy.cfg that should point you in the right direction. Any other HTTP proxy that's capable of handling websockets will work here, if you know what you're doing.

To run the node server, you'll need to use npm to install the dependencies. If you simply go into the node directory, and run "npm install", that will take care of it. Running "node main.js" will run the server. In a production configuration, you'll want to use something like Forever.

Whenever your current webapp wants to broadcast a message, it will make a request to your node server to "/notify", on a private port (defaults to 3000) on localhost. There is an example in php.

There is a some sample code for listening for the broadcasts in javascript attached, and the socket.io documentation is good in this area.


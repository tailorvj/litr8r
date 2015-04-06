## Synopsis

litr8r is a live translation software with chroma key (green screen) background for live event broadcast mixing. Use it with your video mixer to display live translation during live event broadcasts.

## Motivation

I've written it for use in live Internet broadcasts I produce, on UStream and on other platforms. 

## Installation

Clone the project to a node.js server, cd into project folder and run npm install to install all dependencies. 

run node index to run the server and CTRL+C to stop it. 

## Translation workflow
The app consists of two main screens: Input and output. 

Input is on http://servername:3000

Output is on http://servername:3000/output

Run output window in full screen and connect to a video mixer with Chroma key support. Use Chroma key to remove green background and mix with video input. 

## Tests

Currently the project is in prototype stage. Hence, there are no tests. You should open http://server:3000 to see the translator input and in another browser window open http://servername:3000/output to see translation output. each message sent from the input page should also be seen in the console and info about clients connecting/disconnecting.

## Contributors

@tailorvj

## License

GPL v3

## Synopsis

litr8r is a live translation software with chroma key (green screen) background for live event broadcast mixing. Use it with your video mixer to display live translation during live event broadcasts.

## Motivation

I've written it for use in live Internet broadcasts I produce, on UStream and on other platforms. 

## Installation

Clone the project to a node.js server, cd into project folder and run npm install to install all dependencies. 

run node index to run the server and CTRL+C to stop it. 

## Heroku deployment

If you have the heroku toolbelt installed, simply create a new heroku app, add a web dyno and deploy via git push heroku master.

## Demo

[Output](https://tranquil-anchorage-5276.herokuapp.com/).

[Input](https://tranquil-anchorage-5276.herokuapp.com/input).

## Translation workflow
The app consists of two main screens: Input and output. 

Output is on http://servername:5000

Input is on http://servername:5000/input

Run output window in full screen and connect to a video mixer with Chroma key support. Use Chroma key to remove green background and mix with video input. 

## Tests

Currently the project is in prototype stage. Hence, there are no tests. You should open http://server:5000 to see the translator input and in another browser window open http://servername:3000/output to see translation output. each message sent from the input page should also be seen in the console and info about clients connecting/disconnecting.

## Screenshots
![litr8r prototype input screen](http://tailorvj.github.io/images/20150406-litr8r-input-heroku.jpg)

![litr8r prototype output screen](http://tailorvj.github.io/images/20150406-litr8r-output-heroku.jpg)

## Contributors

@tailorvj

## License

GPL v3

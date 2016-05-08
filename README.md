## Synopsis

litr8r is a live translation software with chroma key (green screen) background for live event broadcast mixing. Use it with your video mixer to display live translation during live event broadcasts.

## Version 1.01
* Added saved translations feature in a simple text file
* Edit /public/txt/texts.txt
* Autodeploy to heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/tailorvj/litr8r/tree/1.01)

## Motivation

I've written it for use in live Internet broadcasts I produce, on YouTube Live, Facebook Live and other platforms that suppot RTMP

## Local Installation

Clone the project to a node.js server, cd into project folder and run npm install to install all dependencies. 

run node index to run the server and CTRL+C to stop it. 

## Heroku deployment

Automatic deployment is available using the following button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/tailorvj/litr8r/tree/1.01)

If you like using the heroku toolbelt installed, simply create a new heroku app, add a web dyno and deploy via git push heroku master.

## Demo

[Input](https://thawing-reaches-20064.herokuapp.com/input).

Usage: 

* Arrow up twice and Enter to start (due to a current bug. will be fixed soon)
* Arrow Up to load next saved phrase into editing area
* Arrow Down to load previous saved phrase into editing area
* Enter to submit to output
* Preview available at the top which you type
* Output monitor available at the bottom

[Output](https://thawing-reaches-20064.herokuapp.com).

Usage: run in full screen and remove background color using chroma key in your video mixer

## Translation workflow
The app consists of two main screens: Input and output. 

Input is on http://servername:5000/input

Usage: 

* Arrow up twice and Enter to start (due to a current bug. will be fixed soon)
* Arrow Up to load next saved phrase into editing area
* Arrow Down to load previous saved phrase into editing area
* Enter to submit to output
* Preview available at the top which you type
* Output monitor available at the bottom

Output is on http://servername:5000

Run output window in full screen and connect to a video mixer with Chroma key support. Use Chroma key to remove green background and mix with video input. 

## Tests

Currently the project is in prototype stage. Hence, there are no tests. You should open http://server:5000 to see the translator input and in another browser window open http://servername:3000/output to see translation output. each message sent from the input page should also be seen in the console and info about clients connecting/disconnecting.

## Screenshots
TODO: add currentl screenshots

## Contributors

@tailorvj

## License

GPL v3
Please give credit for subtitles softwaer to Tailor Vijay in your broadcasts
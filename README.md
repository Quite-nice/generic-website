# generic-website
This CLI tool should create a generic, static, portfolio type website. Why? because I need one and I much rather fiddle around in javascript than any other website generator or god forbid, HTML + CSS... For now, it is meant for use on the server which reduces the need for fancy ssh deploys. If you want something like that, feel free to issue a pull request!

> OH! I guess `generic-website` is a placeholder name, I need something cool and fancy to replace it. Suggestions are welcome!

## Installing
```
npm install -g generic-website
```
## Using
This generator tool consists of 4 basic commands (as of now, this might change of course!):

* `generic init`: This one initializes your project by creating a `.generic.json` file and asking you a bunch of questions
* `generic change [...opts] `: This one changes a field or section in case you answered with a stupid reply in the previous command
* `generic add [field] [...opts]`: Obviously, this one is used to add some new stuff to your site. Could be elements, sections, ... I'll document this thing a little more further down the road
* `generic deploy [...opts]`: As this is mainly a server side tool, this one deploys your site to localhost. As of yet, the script doesn't open up any ports to the outside world and by default, deploys to `3000`. This is a command that could use some enhancing.

> In case you're wondering, a `delete` command still needs creating.

> Use `-h` or `--help` on any command for more information regarding the options and fields.

## Future
This tool only generates a title to prove it works. These are some of the next steps that I need to tackle before I come even close to a 1.0.0 release:

* Render a cool website based on the `.generic.json` file
* Tests!
* Support for plugins and themes (probably bootstrap)

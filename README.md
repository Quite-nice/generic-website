# generic-website
Generic website generator

This repo doesn't do anything just yet, but it should:

given a `JSON` file named `.gwrc` (short for `generic-website-rc` ([read this to know what rc actually  means](http://stackoverflow.com/questions/11030552/what-does-rc-mean-in-dot-files)) like the one below...:
```json
{
  "title": "Franzjipan",
  "domain": "franzjipan.be",
  "subtitle": "top notch bakery",
  "theme": "this could be anything",
  "references": {
    "jeroen": "url or logo",
    "kymer": "url or logo",
    "damiaan": "url or logo"
  }
  ...
}
```

> __Please note that:__ this `JSON` object is a mere example and could be something completely different once finished.

... should create a generic, static, portfolio type website. Why? because I need one and I much rather fiddle around in javascript than any other website generator or god forbid, HTML + CSS...

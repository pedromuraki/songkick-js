A boilerplate for projects.

This boilerplate uses _gulp_, _sass_, _smacss_, _webpack_, _babel_, _eslint_ and _browsersync_.

***

## Setup
Clone this repository, then clear git folder and init a new git repository
```
$ git clone https://github.com/pedromuraki/boilerplate.git .
$ rm -rf .git
$ git init
```

Install packages (_gulp_, _webpack_, _babel_, _eslint_, ...)
```
$ npm run installpackages
```

Setup _eslint_ configuration file
```
$ ./node_modules/.bin/eslint --init
```

***

## NPM Scripts
Install packages (_gulp_, _webpack_, _babel_, _eslint_, ...)
```
$ npm run installpackages
```

Run _eslint_ (configure the files to be linted on _package.json_)
```
$ npm run lint
```

Bundle application with _webpack_
```
$ npm run bundle
$ npm run bundle:watch
```

***

## Gulp Tasks
Browsersync (watching _scss_, _html_ and _js_ files)
```
$ gulp bs
```

### CSS
Sass (compile _scss_ files)
```
$ gulp sass
```

CSS (group media queries and minify)
```
$ gulp css
```

### JS
Uglify (minify _js_ files)
```
$ gulp uglify
```

### Images
Imagemin (optimize images)
```
$ gulp img
```

***

## Useful Libs

- [Greensock](https://greensock.com/)
- [Scrollmagic](http://scrollmagic.io/)
- [Enquire](http://wicky.nillia.ms/enquire.js/)
- [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
- [Clipboard JS](https://github.com/zenorocha/clipboard.js/)
- [PhotoSwipe](https://github.com/dimsemenov/photoswipe)
- [Macy](https://github.com/bigbitecreative/macy.js)

***

## Useful Links & Tools

- [Git Cheatsheet](https://github.com/pedromuraki/git-cheatsheet)
- [Favicon Generator](https://www.favicon-generator.org/)
- [Sitemap Generator](https://www.xml-sitemaps.com/)
- [Social Meta Tags Generator](https://megatags.co/)
- [CSS3 Gradient Generator](http://www.colorzilla.com/gradient-editor/)

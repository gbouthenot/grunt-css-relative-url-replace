# grunt-css-relative-url-replace

> Grunt task to replace css urls with relative path

## Getting Started
This plugin requires Grunt `~1.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-relative-url-replace --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-relative-url-replace');
```

### Options

#### options.staticRoot
Type: `String`
Default value: `'public'`

The root static directory in your website

### Usage Examples

#### Gruntfile.js
```js
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-css-relative-url-replace');

  grunt.initConfig({
    css_relative_url_replace: {
      options: {
        staticRoot: 'public/'
      },
      replace: {
        files: {
          'public/dest/build.css': [
            'public/css/application.css',
            'public/css/users/default.css',
            'public/twitter-bootstrap/css/bootstrap.css'
          ]
        }
      }
    }
  });
};
```

In this example, imagine the following folder structure and css contents:

```
public
├── css
│   └─── application.css
|   └─── users
|        └─── default.css
├── images
|   └── banner.png
|   └── avatar.png
├── twitter-bootstrap
|   └── css
|       └── bootstrap.css
|   └── fonts
|       └── glyphicons-halflings-regular.eot
|       └── glyphicons-halflings-regular.ttf
|       └── glyphicons-halflings-regular.svg

```

#### public/css/application.css
```css
  .banner{background-image:url("../images/banner.png");}
  .banner{background-image:url("../images/banner.png#test");}
  .http { background-image: url("http://somehost.com/image.png"); }
  .https_urls { background-image: url("https://somehost.com/image.png"); }
```

#### public/css/users/default.css
```css
  .avatar{background-image:url("../../images/avatar.png");}
  .avatar{background-image:url("../../images/avatar.png?name=test");}
  .data_urls { background-image: url('data:image/png:base64,0'); }
```

#### public/twitter-bootstrap/css/bootstrap.css
```css
  @font-face {
    font-family: 'Glyphicons Halflings';
    src: url('../fonts/glyphicons-halflings-regular.eot');
    src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
  }
```

#### the generated file public/dest/build.css is would be:
```css
  .banner{background-image:url("images/banner.png");}
  .banner{background-image:url("images/banner.png#test");}
  .http { background-image: url("http://somehost.com/image.png"); }
  .https_urls { background-image: url("https://somehost.com/image.png"); }

  .avatar{background-image:url("images/avatar.png");}
  .avatar{background-image:url("images/avatar.png?name=test");}
  .data_urls { background-image: url('data:image/png:base64,0'); }
  .backslashes_urls { background-image: url('\images\e.png') }

  @font-face {
    font-family: 'Glyphicons Halflings';
    src: url("twitter-bootstrap/fonts/glyphicons-halflings-regular.eot");
    src: url("twitter-bootstrap/fonts/glyphicons-halflings-regular.eot?#iefix") format('embedded-opentype'), url("twitter-bootstrap/fonts/glyphicons-halflings-regular.woff2") format('woff2'), url("twitter-bootstrap/fonts/glyphicons-halflings-regular.woff") format('woff'), url("twitter-bootstrap/fonts/glyphicons-halflings-regular.ttf") format('truetype'), url("twitter-bootstrap/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular") format('svg');
  }
```

## Contributors
* [Tom Huang](https://github.com/nanjingboy)
* [superbug](https://github.com/superbug)
* [Nehle](https://github.com/Nehle)

## License
* MIT

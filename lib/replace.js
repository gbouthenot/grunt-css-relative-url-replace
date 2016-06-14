var fs = require('fs'),
  path = require('path'),
  Replace;

Replace = function(fileName, staticRoot) {
  this.fileName = path.resolve(fileName);
  this.staticRoot = path.resolve(staticRoot);
  this.rootFull = staticRoot;
};

Replace.prototype.run = function() {
  var fileName = this.fileName,
    staticRoot = this.staticRoot,
    rootFull   = this.rootFull,
    data;

  if (fs.existsSync(fileName)) {
    data = fs.readFileSync(fileName).toString();
    if (data && rootFull) {
      return data.replace(/url\s*\(\s*(['"]?)([^"'\)]*)\1\s*\)/gi, function(match, location) {
        var url, dirName;

        match = match.replace(/\s/g, '');
        url = match.slice(4, -1).replace(/"|'/g, '').replace(/\\/g, '/');
        if (/^\/|https:|http:|data:/i.test(url) !== false) {
          return match; // No change
        }
        dirName = path.dirname(fileName) + path.sep + url;
        url = path.relative(rootFull, dirName);

        return 'url("' + url + '")';
      });
    }

    return data;
  }

  return '';
};

module.exports = Replace;

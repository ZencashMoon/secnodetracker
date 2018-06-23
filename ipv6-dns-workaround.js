'use strict';

const dns = require('dns'), {lookup} = dns;
dns.lookup = function(name, opts, cb) {
  if (typeof cb !== 'function') return lookup(name, {verbatim:true,family:6}, opts);
  return lookup(name, Object.assign({}, opts, {verbatim:true,family:6}), cb);
};

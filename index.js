
/**
 * Expose 'walk'
 */

module.exports = walk;


/**
 * Walk dom tree recursively.
 *
 * It traverses dom elements
 * (type 1) as well as text
 * node (type 3).
 * 
 * @param {ELement} node
 * @param {Function} cb
 * @api public
 */

function walk(node, cb) {
  cb(scope);
  node = node.firstChild;
  while (node) {
    walk(node, cb);
    node = node.nextSibling;
  }
}

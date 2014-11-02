/**
 * Test dependencies.
 */

var assert = require('component/assert');
var walk = require('..');

describe("walk dom tree", function() {
	var root;
	beforeEach(function() {
		root = document.createElement('div');
	});

	it("should walk an element", function() {
		var i = 0;
		walk(root, function() {
			i++;
		});
		assert.equal(i, 1);
	});

	it("should walk child nodes", function() {
		var nodes = [];
		root.innerHTML = '<section><button>';
		walk(root, function(node) {
			nodes.push(node.nodeName);
		});
		assert.deepEqual(nodes, ['DIV', 'SECTION', 'BUTTON']);
	});

	it("should walk text nodes", function() {
		var text;
		var i = 0;
		root.innerHTML = 'hello';
		walk(root, function(node) {
			text = node.textContent;
			i++;
		});
		assert.equal(text, 'hello');
		assert.equal(i, 2);
	});
	
	
	
	
});

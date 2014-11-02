default: build

# Build the Javascript source with Duo.
build: test/walk.js
	@mkdir -p build
	@duo test/walk.js > build/test.js

clean:
	rm -rf build components

.PHONY: clean
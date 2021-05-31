# `detect-buffer-noassert`

Detects calls to [`buffer`](https://nodejs.org/api/buffer.html) with `noAssert` flag set

From the Node.js API docs: "Setting `noAssert` to true skips validation of the `offset`. This allows the `offset` to be beyond the end of the `Buffer`."

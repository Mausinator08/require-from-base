'use-strict';

module.exports = {
    base: __dirname + "../../",
    base_require: function(id) {
        return require(base + id);
    }
}

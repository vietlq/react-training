var React = require('react');

var Test = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="well bs-horizontal">
                            <form className="form-horizontal">
                                <div className="form-group label-static">
                                    <label htmlFor="i2" className="control-label">label-static</label>
                                    <input type="email" className="form-control" id="i2"
                                        placeholder="placeholder attribute" />
                                    <p className="help-block">This is a hint as a <code>p.help-block.hint</code></p>
                                </div>

                                <div className="form-group label-floating">
                                    <label htmlFor="i5" className="control-label">label-floating</label>
                                    <input type="email" className="form-control" id="i5" />
                                    <span className="help-block">This is a hint as a <code>span.help-block.hint</code></span>
                                </div>

                                <div className="form-group label-placeholder">
                                    <label htmlFor="i5p" className="control-label">label-placeholder</label>
                                    <input type="email" className="form-control" id="i5p" />
                                    <span className="help-block">This is a hint as a <code>span.help-block.hint</code></span>
                                </div>

                                <div className="form-group">
                                    <label className="col-lg-2 control-label">Radios</label>

                                    <div className="col-lg-10">
                                        <div className="radio radio-primary">
                                            <label>
                                                <input type="radio" name="optionsRadios" defaultChecked />
                                                Option one
                                            </label>
                                        </div>
                                        <div className="radio radio-primary">
                                            <label>
                                                <input type="radio" name="optionsRadios" />
                                                Option two
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Test;

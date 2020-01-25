var sessionModel = require('../models/sessionModel.js');

/**
 * sessionController.js
 *
 * @description :: Server-side logic for managing sessions.
 */
module.exports = {

    /**
     * sessionController.list()
     */
    list: function (req, res) {
        sessionModel.find(function (err, sessions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting session.',
                    error: err
                });
            }
            return res.json(sessions);
        });
    },

    /**
     * sessionController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        sessionModel.findOne({_id: id}, function (err, session) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting session.',
                    error: err
                });
            }
            if (!session) {
                return res.status(404).json({
                    message: 'No such session'
                });
            }
            return res.json(session);
        });
    },

    /**
     * sessionController.create()
     */
    create: function (req, res) {
        var session = new sessionModel({
			time : req.body.time,
			duration : req.body.duration,
			reservation_limit : req.body.reservation_limit,
			reservation_count : req.body.reservation_count,
			description : req.body.description,
			name : req.body.name,
            teacher : req.body.teacher,
            location : req.body.location

        });

        session.save(function (err, session) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating session',
                    error: err
                });
            }
            return res.status(201).json(session);
        });
    },

    /**
     * sessionController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        sessionModel.findOne({_id: id}, function (err, session) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting session',
                    error: err
                });
            }
            if (!session) {
                return res.status(404).json({
                    message: 'No such session'
                });
            }

            session.time = req.body.time ? req.body.time : session.time;
			session.duration = req.body.duration ? req.body.duration : session.duration;
			session.reservation_limit = req.body.reservation_limit ? req.body.reservation_limit : session.reservation_limit;
			session.reservation_count = req.body.reservation_count ? req.body.reservation_count : session.reservation_count;
			session.description = req.body.description ? req.body.description : session.description;
			session.name = req.body.name ? req.body.name : session.name;
			
            session.save(function (err, session) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating session.',
                        error: err
                    });
                }

                return res.json(session);
            });
        });
    },

    /**
     * sessionController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        sessionModel.findByIdAndRemove(id, function (err, session) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the session.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

var reservationModel = require('../models/reservationModel.js');
var sessionModel = require('../models/sessionModel.js');

/**
 * reservationController.js
 *
 * @description :: Server-side logic for managing reservations.
 */
module.exports = {

    /**
     * reservationController.list()
     */
    list: function (req, res) {
        reservationModel.find(function (err, reservations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reservation.',
                    error: err
                });
            }
            return res.json(reservations);
        });
    },

    /**
     * reservationController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        reservationModel.findOne({_id: id}, function (err, reservation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reservation.',
                    error: err
                });
            }
            if (!reservation) {
                return res.status(404).json({
                    message: 'No such reservation'
                });
            }
            return res.json(reservation);
        });
    },

    /**
     * reservationController.create()
     */
    create: function (req, res) {

        sessionModel.findOne({_id: req.body.session_id}, function (err, session) {
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
            //return res.json(session);
            console.log(session)
            console.log(session['reservation_count'])

            if (session['reservation_count'] < session['reservation_limit']) {
                console.log('WE are okay to reserve')

                sessionModel.findOneAndUpdate({_id: req.body.session_id}, {$inc : { reservation_count: 1 }}).exec();
                var reservation = new reservationModel({
                    email : req.body.email,
                    session_id : req.body.session_id

                });

                reservation.save(function (err, reservation) {
                    if (err) {
                        return res.status(500).json({
                        message: 'Error when creating reservation',
                        error: err
                        });
                    }
                    return res.status(201).json(reservation);
                });
            } else {
                return res.status(503).json({
                    message: 'That session is currently full'
                });
            }
        });

    },

    /**
     * reservationController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        reservationModel.findOne({_id: id}, function (err, reservation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reservation',
                    error: err
                });
            }
            if (!reservation) {
                return res.status(404).json({
                    message: 'No such reservation'
                });
            }

            reservation.email = req.body.email ? req.body.email : reservation.email;
			
            reservation.save(function (err, reservation) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating reservation.',
                        error: err
                    });
                }

                return res.json(reservation);
            });
        });
    },

    /**
     * reservationController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        reservationModel.findByIdAndRemove(id, function (err, reservation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the reservation.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

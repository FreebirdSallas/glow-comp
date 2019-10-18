const router = require ('express').Router ();
const eventController = require ('../../controllers/eventController');

// matches /api/events
router.route ('/').get (eventController.findAll).post (eventController.create);

//matches /api/events/:id
router
  .route ('/:id')
  .get (eventController.findById)
  .put (eventController.update)
  .delete (eventController.remove);
// /api/events/user/:id
router.route ('/user/:id').get (eventController.findUserEvents);
module.exports = router;

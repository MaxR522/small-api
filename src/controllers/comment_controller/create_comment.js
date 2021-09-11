const Comment = require('../../models/comment');

module.exports = (req, res) => {
  const { author, content, carId } = req.body;

  const newComment = new Comment({
    author,
    content,
    carId,
  });

  newComment.save((error) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }

    return res.status(201).json({
      message: 'comment created successfully',
      comment: newComment,
    });
  });
};

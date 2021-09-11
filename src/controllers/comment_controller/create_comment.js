const Comment = require('../../models/comment');

module.exports = (req, res) => {
  const { author, content, carId } = req.body;

  const newComment = new Comment({
    author,
    content,
    carId,
  });

  newComment.save((error) => {
    if (error) throw new Error(error);

    return res.status(201).json({
      message: 'comment created successfully',
      comment: newComment,
    });
  });
};

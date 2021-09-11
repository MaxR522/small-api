const Comment = require('../../models/comment');

module.exports = async (req, res) => {
  const carId = req.params.id;

  try {
    const comments = await Comment.find({ carId });

    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

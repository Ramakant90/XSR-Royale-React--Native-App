const { supabase } = require('../config/supabaseClient');

exports.addComment = async (req, res) => {
  const { video_id, user_id, text } = req.body;

  const { data, error } = await supabase.from('comments').insert([
    { video_id, user_id, text }
  ]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ comment: data });
};

exports.getComments = async (req, res) => {
  const { video_id } = req.params;
  const { data, error } = await supabase.from('comments').select('*').eq('video_id', video_id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

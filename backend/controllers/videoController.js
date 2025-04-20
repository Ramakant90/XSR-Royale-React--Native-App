const { supabase } = require('../config/supabaseClient');
const cloudinary = require('cloudinary').v2;

exports.uploadVideo = async (req, res) => {
  const { title, user_id, file } = req.body;

  const uploadResponse = await cloudinary.uploader.upload(file, {
    resource_type: 'video',
  });

  const { data, error } = await supabase.from('videos').insert([
    { title, url: uploadResponse.secure_url, user_id }
  ]);

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ video: data });
};

exports.getAllVideos = async (req, res) => {
  const { data, error } = await supabase.from('videos').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
};

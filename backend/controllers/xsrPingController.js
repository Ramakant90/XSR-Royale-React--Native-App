const { supabase } = require('../config/supabaseClient');

exports.sendPing = async (req, res) => {
  const { sender_id, receiver_id } = req.body;
  const { data, error } = await supabase.from('xsr_pings').insert([{ sender_id, receiver_id }]);
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ ping: data });
};

exports.getNotifications = async (req, res) => {
  const { user_id } = req.params;
  const { data, error } = await supabase
    .from('xsr_pings')
    .select('*')
    .eq('receiver_id', user_id)
    .order('created_at', { ascending: false });

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

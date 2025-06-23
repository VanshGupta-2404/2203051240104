const axios = require('axios');
require('dotenv').config();

const accessToken = process.env.ACCESS_TOKEN;

const Log = async (stack, level, pkg, message) => {
  try {
    await axios.post(
      'http://20.244.56.144/evaluation-service/logs',
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`  
        }
      }
    );
  } catch (err) {
    console.error('❌ Failed to send remote log:', err.response?.data || err.message);
  }
};

module.exports = Log;

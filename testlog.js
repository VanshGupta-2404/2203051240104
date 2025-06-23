const axios = require("axios");

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjAzMDUxMjQwMTA0QHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsImV4cCI6MTc1MDY2NDQwMCwiaWF0IjoxNzUwNjYzNTAwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNzIwYTU4NmEtMzc1YS00ZjkxLWJhYWUtMjg5NjdlNWU0MWU1IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmFuc2ggZ3VwdGEiLCJzdWIiOiI2ODM5NzJjMi1hMDdmLTQyNGYtYjVlMi03Njc0MTJkMGIwODYifSwiZW1haWwiOiIyMjAzMDUxMjQwMTA0QHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsIm5hbWUiOiJ2YW5zaCBndXB0YSIsInJvbGxObyI6IjIyMDMwNTEyNDAxMDQiLCJhY2Nlc3NDb2RlIjoiVFJ6Z1dNIiwiY2xpZW50SUQiOiI2ODM5NzJjMi1hMDdmLTQyNGYtYjVlMi03Njc0MTJkMGIwODYiLCJjbGllbnRTZWNyZXQiOiJLSlpmS3NLR2NBa3FCY0NIIn0.38V_iNjrDMW5NdmFR42ri3sOcSSu9j7Kp-26F9K34C8"; 

const testLog = async () => {
  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      {
        stack: "backend",
        level: "info",
        package: "logger",
        message: "🚀 Test log from Vansh's script"
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ Log sent successfully:", response.data);
  } catch (error) {
    console.error("❌ Failed to send log:");
    console.error(error.response?.data || error.message);
  }
};

testLog();

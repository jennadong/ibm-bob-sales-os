function App() {
  const accounts = [
    {
      name: "CAST & CREW Payroll",
      value: 55586,
      score: 82,
      status: "Executive Reachback",
    },
    {
      name: "CoreLogic",
      value: 20239,
      score: 65,
      status: "MQ Assessment",
    },
    {
      name: "KKR / Alliant",
      value: 20200,
      score: 61,
      status: "Replacement Use Case",
    },
    {
      name: "Pacific Sunwear",
      value: 18540,
      score: 35,
      status: "Transformation Play",
    },
    {
      name: "XTRACKS",
      value: 15277,
      score: 77,
      status: "No Response Recovery",
    },
    {
      name: "CHLA",
      value: 9339,
      score: 58,
      status: "Budget Review",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#f3f4f6",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          background: "#0f62fe",
          color: "white",
          padding: "25px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <h1>IBM BOB Sales Intelligence OS</h1>
        <h3>Jenna Dong | US West Seller</h3>
        <p>Manager: Rea Chivi</p>
        <p>Skip Manager: Matthew Suarez</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "15px",
          marginBottom: "25px",
        }}
      >
        <div style={card}>💰 Recovery Pool<br /><b>$139K+</b></div>
        <div style={card}>🎯 Target Recovery<br /><b>$35K</b></div>
        <div style={card}>📈 Pipeline Health<br /><b>72%</b></div>
        <div style={card}>⚡ Priority Accounts<br /><b>6</b></div>
      </div>

      <div style={section}>
        <h2>Attrition Recovery War Room</h2>

        {accounts.map((account) => (
          <div
            key={account.name}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
              background: "white",
            }}
          >
            <h3>{account.name}</h3>

            <p>
              <b>ACV:</b> $
              {account.value.toLocaleString()}
            </p>

            <p>
              <b>Recovery Score:</b> {account.score}%
            </p>

            <p>
              <b>Next Action:</b> {account.status}
            </p>
          </div>
        ))}
      </div>

      <div style={section}>
        <h2>Today's Action Queue</h2>

        <ul>
          <li>Reach CAST & CREW stakeholder</li>
          <li>Call XTRACKS reseller</li>
          <li>Build CHLA ROI review</li>
          <li>Partner sync with CDW</li>
          <li>Refresh recovery quotes</li>
        </ul>
      </div>

      <div style={section}>
        <h2>AI Outreach Draft</h2>

        <textarea
          style={{
            width: "100%",
            height: "220px",
          }}
          defaultValue={`Subject: IBM Renewal Reassessment

Hi Contact,

Since our last renewal discussion, we have identified new options that may address the concerns that led to the prior decision.

Would you be available for a brief 15-minute review of modernization options, cost optimization opportunities, and current IBM incentives?

Regards,
Jenna Dong`}
        />
      </div>
    </div>
  );
}

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
};

const section = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "20px",
};

export default App;

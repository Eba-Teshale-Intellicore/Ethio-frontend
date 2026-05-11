export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* Stats */}
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <div style={{ padding: "1rem", background: "#fff", border: "1px solid #eee" }}>
          <h3>Total Heroes</h3>
          <p>120</p>
        </div>

        <div style={{ padding: "1rem", background: "#fff", border: "1px solid #eee" }}>
          <h3>Total Users</h3>
          <p>45</p>
        </div>

        <div style={{ padding: "1rem", background: "#fff", border: "1px solid #eee" }}>
          <h3>Comments</h3>
          <p>300</p>
        </div>

        <div style={{ padding: "1rem", background: "#fff", border: "1px solid #eee" }}>
          <h3>Views</h3>
          <p>1,200</p>
        </div>
      </div>
    </div>
  );
}
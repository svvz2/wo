export default function Page() {
  return (
    <main style={{ padding: 40 }}>
      <h1>VM Sandbox Check</h1>
      <p>Send POST request to /api/check</p>
      <pre>{`{"code":"return 1+1"}`}</pre>
    </main>
  );
}

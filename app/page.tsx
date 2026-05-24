export default function Home() {
  const properties = [
    { id: 1, name: 'Rumah Teres Seksyen 7', rent: 1200, status: 'Occupied' },
    { id: 2, name: 'Condo Setia Alam', rent: 1800, status: 'Vacant' },
  ];

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Landlord Dashboard</h1>
      <p>Senarai rumah sewa anda.</p>

      <section style={{ marginTop: '20px' }}>
        {properties.map((p) => (
          <div
            key={p.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            <strong>{p.name}</strong>
            <br />
            Sewa: RM{p.rent} / bulan
            <br />
            Status: {p.status}
          </div>
        ))}
      </section>
    </main>
  );
}

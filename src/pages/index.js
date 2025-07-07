import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Freepower API" description="Compare. Switch. Save.">
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to the Freepower API</h1>
        <p>
          Use this documentation to learn how to estimate energy usage, compare tariffs, and integrate
          with our switching tools.
        </p>
        <a href="/docs/api">Explore the API →</a>
      </main>
    </Layout>
  );
}
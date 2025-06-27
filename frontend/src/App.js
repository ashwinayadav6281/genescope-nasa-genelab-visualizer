import React, { useEffect, useState } from 'react';

function App() {
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrganism, setSelectedOrganism] = useState('All');
  
  const uniqueOrganisms = [
  'All',
  ...Array.from(new Set(datasets.map(d => d.organism).filter(Boolean)))
];

  useEffect(() => {
  fetch('http://localhost:5000/api/datasets')
    .then((res) => res.json())
    .then((data) => {
      console.log('📦 Raw fetched data:', data);

      const hits = data?.hits?.hits || [];

      if (!Array.isArray(hits)) {
        throw new Error('Invalid data format from API');
      }

      // Extract only the _source field from each hit
      const extracted = hits.map((hit) => hit._source);

      setDatasets(extracted);
      setLoading(false);
    })
    .catch((err) => {
      console.error('❌ Fetch error:', err);
      setError('Failed to fetch datasets');
      setLoading(false);
    });
}, []);


  return (
    <div style={{ padding: '20px' }}>
      <h1>🚀 NASA GeneLab Datasets</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {datasets.length === 0 && !loading && !error && (
        <p>No datasets found.</p>
      )}
      <input
  type="text"
  placeholder="Search by title, accession, or organism"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    padding: '10px',
    width: '100%',
    marginBottom: '20px',
    fontSize: '16px'
  }}
/>
<select
  value={selectedOrganism}
  onChange={(e) => setSelectedOrganism(e.target.value)}
  style={{ padding: '10px', marginBottom: '20px', fontSize: '16px' }}
>
  {uniqueOrganisms.map((org, idx) => (
    <option key={idx} value={org}>{org}</option>
  ))}
</select>
<img
  src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
  alt="NASA Logo"
  style={{ width: '150px', margin: '20px auto', display: 'block' }}
/>

<h1 style={{ textAlign: 'center', color: '#66fcf1' }}>
  GeneScope: NASA GeneLab Explorer
</h1>

      <ul>
  {datasets
    .filter((d) => {
  const term = searchTerm.toLowerCase();
  const matchesSearch =
    d["Study Title"]?.toLowerCase().includes(term) ||
    d["Accession"]?.toLowerCase().includes(term) ||
    (typeof d.organism === 'string' && d.organism.toLowerCase().includes(term));

  const matchesOrganism =
    selectedOrganism === 'All' || d.organism === selectedOrganism;

  return matchesSearch && matchesOrganism;
})


    .map((d, i) => (
      <li key={d.Accession}>
  <h3>{d["Study Title"]}</h3>
  <p><strong>Organism:</strong> {d.organism}</p>
  <p><strong>Accession:</strong> {d.Accession}</p>

  {d.thumbnail && (
    <img
      src={`https://genelab-data.ndc.nasa.gov${d.thumbnail}`}
      alt="study thumbnail"
      style={{ width: '100%', maxWidth: '300px', marginTop: '10px', borderRadius: '10px' }}
    />
  )}
</li>

    ))}
</ul>


    </div>
  );
}

export default App;

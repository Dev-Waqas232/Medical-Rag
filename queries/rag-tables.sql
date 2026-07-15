CREATE TABLE IF NOT EXISTS drugs (
  id SERIAL PRIMARY KEY,
  generic_name TEXT NOT NULL UNIQUE,
  brand_name TEXT,
  substance_name TEXT,
  pharm_class_epc TEXT,
  rxcui TEXT,
  route TEXT,
  manufacturer_name TEXT
);

CREATE TABLE IF NOT EXISTS chunks (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  embedding VECTOR(3072),
  drug_generic_name TEXT NOT NULL REFERENCES drugs(generic_name),
  section TEXT NOT NULL, -- e.g. 'drug_interactions', 'warnings', 'precautions', 'pregnancy'
  source_field TEXT -- optional: original FDA field name, for citation purposes
);

CREATE INDEX IF NOT EXISTS idx_chunks_drug_generic_name ON chunks(drug_generic_name);

CREATE INDEX IF NOT EXISTS idx_chunks_section ON chunks(section);

import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'portfolio.db');

declare global {
  var db: Database.Database | undefined;
}

const sqlite = global.db || new Database(dbPath);

if (process.env.NODE_ENV !== 'production') {
  global.db = sqlite;
}

// Initialize tables
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS personal_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    description TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    github TEXT,
    linkedin TEXT,
    hero_image TEXT,
    quote TEXT,
    mission TEXT,
    vision TEXT,
    goals TEXT,
    school TEXT,
    grade TEXT
  );

  CREATE TABLE IF NOT EXISTS experiences (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company TEXT NOT NULL,
    position TEXT NOT NULL,
    duration TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT
  );

  CREATE TABLE IF NOT EXISTS skills (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL, -- e.g., 'Frontend', 'Backend', 'Tools'
    percentage INTEGER DEFAULT 0 -- 0 to 100
  );

  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    tech_stack TEXT NOT NULL, -- comma separated
    github_link TEXT,
    live_link TEXT,
    image_url TEXT
  );
`);

export default sqlite;

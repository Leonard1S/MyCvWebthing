const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.resolve(process.cwd(), 'portfolio.db');
const seederDb = new Database(dbPath);

const seedData = () => {
  // Drop tables to update schema
  seederDb.exec(`
    DROP TABLE IF EXISTS personal_data;
    DROP TABLE IF EXISTS experiences;
    DROP TABLE IF EXISTS skills;
    DROP TABLE IF EXISTS projects;
  `);

  // Create tables
  seederDb.exec(`
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

  // Clear existing data
  seederDb.exec(`
    DELETE FROM personal_data;
    DELETE FROM experiences;
    DELETE FROM skills;
    DELETE FROM projects;
  `);

  // Seed personal data
  const insertPersonal = seederDb.prepare(`
    INSERT INTO personal_data (name, role, description, email, phone, github, linkedin, hero_image, quote, mission, vision, goals, school, grade)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  insertPersonal.run(
    'Aurelio Leonard Sugiarto',
    'Siswa Kelas 12 | Bahasa Inggris, Ekonomi, Informatika, dan Memasak',
    'Saya adalah siswa di SMAK Frateran Surabaya, saat ini berada di tahun terakhir (Kelas 12). Saya memiliki gairah untuk belajar dan memperluas wawasan saya di berbagai disiplin ilmu, khususnya fokus pada Bahasa Inggris, Ekonomi, Informatika, dan seni kuliner. Saya berusaha menyeimbangkan tanggung jawab akademis saya dengan minat pribadi dalam olahraga dan kepemimpinan.',
    'aurelliosugiarto@gmail.com',
    '+62 85333350889',
    '',
    '',
    '/img/profile-pic.png',
    'Kesuksesan bukanlah akhir, kegagalan bukanlah hal yang fatal: keberanian untuk melanjutkanlah yang penting.',
    'Untuk menjaga studi akademis yang baik dan secara konsisten meningkatkan keterampilan saya untuk mempersiapkan tantangan di masa depan.',
    'Untuk menjadi pembelajar seumur hidup yang berkontribusi secara bermakna bagi masyarakat melalui pengetahuan, kreativitas, dan kepemimpinan.',
    'Menyelesaikan Kelas 12 dengan predikat memuaskan, menguasai dasar-dasar ekonomi dan informatika, serta mengasah keterampilan kuliner dan bahasa saya.',
    'SMAK Frateran Surabaya',
    'KELAS 12'
  );

  // Seed experiences (Internship, Roblox, Web, Reports)
  const insertExperience = seederDb.prepare(`
    INSERT INTO experiences (company, position, duration, description, image_url)
    VALUES (?, ?, ?, ?, ?)
  `);
  insertExperience.run(
    'Magang Profesional',
    'Siswa Magang',
    '',
    'Mendapatkan pengalaman langsung di lingkungan profesional, menerapkan pengetahuan akademis ke tantangan bisnis dunia nyata dan mempelajari alur kerja perusahaan.',
    ''
  );
  insertExperience.run(
    'Pengembangan Roblox',
    'Membuat game',
    '',
    'Merancang dan mengembangkan game interaktif kecil di platform Roblox, mengelola mekanik game, antarmuka pengguna, dan interaksi multipemain.',
    ''
  );
  insertExperience.run(
    'Proyek Pribadi',
    'Pengembangan Web',
    '',
    'Membangun dan meluncurkan situs web fungsional, fokus pada desain responsif dan antarmuka pengguna yang bersih menggunakan teknologi web modern.',
    ''
  );
  insertExperience.run(
    'SMAK Frateran Surabaya',
    'Pembuatan Laporan Proyek & Aktivitas',
    '',
    'Bertanggung jawab untuk membuat laporan komprehensif untuk berbagai proyek sekolah dan aktivitas siswa, memastikan komunikasi yang jelas dan dokumentasi yang akurat.',
    ''
  );

  // Seed skills
  const insertSkill = seederDb.prepare(`
    INSERT INTO skills (name, category, percentage)
    VALUES (?, ?, ?)
  `);
  const skills = [
    ['Public Speaking', 'Bahasa Inggris', 70],
    ['Penulisan Akademik', 'Bahasa Inggris', 100],
    ['Membaca', 'Bahasa Inggris', 100],
    ['Keterampilan Menerjemahkan', 'Bahasa Inggris', 80],
    ['Makroekonomi', 'Ekonomi', 75],
    ['Mikroekonomi', 'Ekonomi', 72],
    ['Literasi Keuangan', 'Ekonomi', 50],
    ['Pengembangan Web', 'Informatika', 65],
    ['Analisis Data', 'Informatika', 50],
    ['Dasar Algoritma', 'Informatika', 50],
    ['Memasak', 'Memasak', 78],
    ['Keamanan & Higiene Makanan', 'Memasak', 80],
    ['Manajemen Dapur', 'Memasak', 75]
  ];
  for (const [name, category, percentage] of skills) {
    insertSkill.run(name, category, percentage);
  }

  // Seed projects
  const insertProject = seederDb.prepare(`
    INSERT INTO projects (title, description, tech_stack, github_link, live_link, image_url)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  insertProject.run(
    'Proyek Sekolah',
    'Laporan penelitian dan presentasi komprehensif tentang tren ekonomi Indonesia.',
    'Ekonomi, Penelitian, MS Office',
    '',
    '',
    '/img/project2.png'
  );
  insertProject.run(
    'Game Roblox',
    'Game interaktif kecil yang dibangun di Roblox yang fokus pada mekanik pemain dan pembangunan dunia.',
    'Lua, Roblox Studio',
    '',
    '',
    '/img/project1.png'
  );

  console.log('Database seeded successfully!');
};

seedData();
seederDb.close();

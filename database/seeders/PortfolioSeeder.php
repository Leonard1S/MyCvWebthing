<?php

namespace Database\Seeders;

use App\Models\PersonalData;
use App\Models\Experience;
use App\Models\Skill;
use Illuminate\Database\Seeder;

class PortfolioSeeder extends Seeder
{
    public function run()
    {
        // Clear existing data
        PersonalData::truncate();
        Experience::truncate();
        Skill::truncate();

        PersonalData::create([
            'name' => 'Aurelio Leonard Sugiarto',
            'role' => 'Siswa Kelas 12 | Bahasa Inggris, Ekonomi, Informatika, dan Memasak',
            'description' => 'Saya adalah siswa di SMAK Frateran Surabaya, saat ini berada di tahun terakhir (Kelas 12). Saya memiliki gairah untuk belajar dan memperluas wawasan saya di berbagai disiplin ilmu, khususnya fokus pada Bahasa Inggris, Ekonomi, Informatika, dan seni kuliner. Saya berusaha menyeimbangkan tanggung jawab akademis saya dengan minat pribadi dalam olahraga dan kepemimpinan.',
            'email' => 'aurelliosugiarto@gmail.com',
            'phone' => '+62 85333350889',
            'github' => '',
            'linkedin' => '',
            'hero_image' => '/img/profile-pic.png',
            'quote' => 'Kesuksesan bukanlah akhir, kegagalan bukanlah hal yang fatal: keberanian untuk melanjutkanlah yang penting.',
            'mission' => 'Untuk menjaga studi akademis yang baik dan secara konsisten meningkatkan keterampilan saya untuk mempersiapkan tantangan di masa depan.',
            'vision' => 'Untuk menjadi pembelajar seumur hidup yang berkontribusi secara bermakna bagi masyarakat melalui pengetahuan, kreativitas, dan kepemimpinan.',
            'goals' => 'Menyelesaikan Kelas 12 dengan predikat memuaskan, menguasai dasar-dasar ekonomi dan informatika, serta mengasah keterampilan kuliner dan bahasa saya.',
            'school' => 'SMAK Frateran Surabaya',
            'grade' => 'KELAS 12'
        ]);

        Experience::create([
            'company' => 'Magang Profesional',
            'position' => 'Siswa Magang',
            'duration' => '',
            'description' => 'Mendapatkan pengalaman langsung di lingkungan profesional, menerapkan pengetahuan akademis ke tantangan bisnis dunia nyata dan mempelajari alur kerja perusahaan.',
            'image_url' => ''
        ]);

        Experience::create([
            'company' => 'Pengembangan Roblox',
            'position' => 'Membuat game',
            'duration' => '',
            'description' => 'Merancang dan mengembangkan game interaktif kecil di platform Roblox, mengelola mekanik game, antarmuka pengguna, dan interaksi multipemain.',
            'image_url' => ''
        ]);

        Experience::create([
            'company' => 'Proyek Pribadi',
            'position' => 'Pengembangan Web',
            'duration' => '',
            'description' => 'Membangun dan meluncurkan situs web fungsional, fokus pada desain responsif dan antarmuka pengguna yang bersih menggunakan teknologi web modern.',
            'image_url' => ''
        ]);

        Experience::create([
            'company' => 'SMAK Frateran Surabaya',
            'position' => 'Pembuatan Laporan Proyek & Aktivitas',
            'duration' => '',
            'description' => 'Bertanggung jawab untuk membuat laporan komprehensif untuk berbagai proyek sekolah dan aktivitas siswa, memastikan komunikasi yang jelas dan dokumentasi yang akurat.',
            'image_url' => ''
        ]);

        $skills = [
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

        foreach ($skills as $skill) {
            Skill::create([
                'name' => $skill[0],
                'category' => $skill[1],
                'percentage' => $skill[2]
            ]);
        }
    }
}

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000 || "https://api-portofolio-ivory.vercel.app/api";

// Middleware
app.use(cors());
app.use(express.json());

// Data profil
let profileData = {
  name: "Alvian Nurhakim",
  title: "Mahasiswa Informatika UNJ | Software Engineer & Quality Control",
  university: "Universitas Negeri Jakarta",
  major: "Informatika",
  about: {
    intro: "Mahasiswa aktif Universitas Negeri Jakarta yang saat ini terlibat dalam berbagai kegiatan organisasi kemahasiswaan. Latar belakang pendidikan sebagai lulusan SMK Akuntansi membentuk fondasi berpikir analitis yang kuat, yang kemudian dikembangkan lebih lanjut melalui pilihan untuk melanjutkan studi dan pengembangan diri di bidang Teknologi Informasi.",
    description: "Sebagai mahasiswa Informatika di Universitas Negeri Jakarta (UNJ), saya mengusung pendekatan yang mengintegrasikan ketelitian analitis dengan kreativitas desain grafis. Pendekatan ini memungkinkan saya untuk tidak hanya menghasilkan visual yang menarik secara estetika, tetapi juga merancang solusi digital yang logis, fungsional, dan berorientasi pada pemecahan masalah secara sistematis."
  },
  image: "WhatsApp Image 2026-01-09 at 09.44.00-copy.jpeg",
  cta: "AYO KENALAN! SCIENCE IS BAD"
};

// Data skills
let skillsData = {
  softSkills: [
    "Kerjasama Tim (terkembang melalui pengalaman organisasi)",
    "Commitment & Responsibility",
    "Leadership",
    "Time Management"
  ],
  hardSkills: [
    "Microsoft Office",
    "Canva Software",
    "Software Engineering (VSCode, Figma, IntelliJ IDEA)"
  ]
};

// Data pengalaman (sesuai dengan screenshot)
let experiencesData = [
  {
    id: 1,
    title: "Praktik Kerja Lapangan",
    organization: "Account & Service Finance of Jakarta Global University",
    year: "2022",
    description: "Mempersiapkan dan mengelola seluruh dokumen serta kebutuhan administratif yang berkaitan dengan kepentingan Universitas, termasuk melakukan pendataan, pengarsipan, dan pemutakhiran informasi administratif guna mendukung kelancaran proses operasional institusi.",
    image: "https://raw.githubusercontent.com/Hakim665/My-Portofolio/main/LOGO JGU.png",
    link: "https://www.instagram.com/jg_university/"
  },
  {
    id: 2,
    title: "Badan Eksekutif Mahasiswa Prodi",
    organization: "Finance Division of BEMP Pendidikan Teknik Informatika dan Komputer",
    year: "2024 - Sekarang",
    description: "Berperan sebagai Koordinator Dana dan Sponsorship pada kegiatan Pelatihan Kepemimpinan Mahasiswa tingkat Program Studi, serta terlibat sebagai staf dalam berbagai program kerja BEM Program Studi. Selain itu, dipercaya untuk melanjutkan amanah sebagai Kepala Biro Keuangan pada periode 2025/2026.",
    image: "LOGO BEMP PTIK (1).png",
    link: "https://www.instagram.com/bempptik_unj/"
  },
  {
    id: 3,
      title: "BANK INDONESIA",
      organization: "Departemen Pengembangan dan Inovasi Digital",
      year: "2026 - Sekarang",
      description: "Berperan sebagai pengembang sekaligus penanggung jawab pengendalian mutu dalam proses perancangan, pengembangan, dan peluncuran berbagai produk digital yang diinisiasi oleh Bank Indonesia melalui Departemen Pengembangan dan Inovasi Digital, dengan memastikan kesesuaian fungsi, kualitas, serta standar yang ditetapkan.",
      image: "https://raw.githubusercontent.com/Hakim665/My-Portofolio/main/LOGO BI.png",
      link: "https://www.bi.go.id/id/default.aspx"
  }
];

// Data kontak
let contactData = {
  email: "alviannurhakim11@gmail.com",
  instagram: "https://instagram.com/alvianhakim_",
  youtube: "https://youtube.com/@ALVIANNURHAKIMM",
  linkedin: "https://www.linkedin.com/in/alvian-nurhakim-b28576287"
};

// ========== ROUTES ==========

// GET - Ambil data profil
app.get('/api/profile', (req, res) => {
  res.json({
    success: true,
    data: profileData
  });
});

// PUT - Update data profil
app.put('/api/profile', (req, res) => {
  profileData = { ...profileData, ...req.body };
  res.json({
    success: true,
    message: "Profil berhasil diupdate",
    data: profileData
  });
});

// GET - Ambil semua skills
app.get('/api/skills', (req, res) => {
  res.json({
    success: true,
    data: skillsData
  });
});

// PUT - Update skills
app.put('/api/skills', (req, res) => {
  skillsData = { ...skillsData, ...req.body };
  res.json({
    success: true,
    message: "Skills berhasil diupdate",
    data: skillsData
  });
});

// GET - Ambil semua pengalaman
app.get('/api/experiences', (req, res) => {
  res.json({
    success: true,
    data: experiencesData
  });
});

// GET - Ambil pengalaman berdasarkan ID
app.get('/api/experiences/:id', (req, res) => {
  const experience = experiencesData.find(exp => exp.id === parseInt(req.params.id));
  if (experience) {
    res.json({
      success: true,
      data: experience
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Pengalaman tidak ditemukan"
    });
  }
});

// POST - Tambah pengalaman baru
app.post('/api/experiences', (req, res) => {
  const newExperience = {
    id: experiencesData.length + 1,
    ...req.body
  };
  experiencesData.push(newExperience);
  res.status(201).json({
    success: true,
    message: "Pengalaman berhasil ditambahkan",
    data: newExperience
  });
});

// PUT - Update pengalaman
app.put('/api/experiences/:id', (req, res) => {
  const index = experiencesData.findIndex(exp => exp.id === parseInt(req.params.id));
  if (index !== -1) {
    experiencesData[index] = { ...experiencesData[index], ...req.body };
    res.json({
      success: true,
      message: "Pengalaman berhasil diupdate",
      data: experiencesData[index]
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Pengalaman tidak ditemukan"
    });
  }
});

// DELETE - Hapus pengalaman
app.delete('/api/experiences/:id', (req, res) => {
  const index = experiencesData.findIndex(exp => exp.id === parseInt(req.params.id));
  if (index !== -1) {
    const deleted = experiencesData.splice(index, 1);
    res.json({
      success: true,
      message: "Pengalaman berhasil dihapus",
      data: deleted[0]
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Pengalaman tidak ditemukan"
    });
  }
});

// GET - Ambil data kontak
app.get('/api/contact', (req, res) => {
  res.json({
    success: true,
    data: contactData
  });
});

// PUT - Update data kontak
app.put('/api/contact', (req, res) => {
  contactData = { ...contactData, ...req.body };
  res.json({
    success: true,
    message: "Kontak berhasil diupdate",
    data: contactData
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
  console.log(`\n📡 API Endpoints:`);
  console.log(`   GET    /api/profile`);
  console.log(`   PUT    /api/profile`);
  console.log(`   GET    /api/skills`);
  console.log(`   PUT    /api/skills`);
  console.log(`   GET    /api/experiences`);
  console.log(`   GET    /api/experiences/:id`);
  console.log(`   POST   /api/experiences`);
  console.log(`   PUT    /api/experiences/:id`);
  console.log(`   DELETE /api/experiences/:id`);
  console.log(`   GET    /api/contact`);
  console.log(`   PUT    /api/contact`);
  console.log(`\n✅ Backend siap digunakan!`);
});
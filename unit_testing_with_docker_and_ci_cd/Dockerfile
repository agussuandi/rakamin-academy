# Menggunakan image Node.js sebagai dasar
FROM node:14

# Direktori kerja dalam kontainer
WORKDIR /usr/src/app

# Menyalin package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Menginstal dependensi
RUN npm install

# Menyalin sisa kode aplikasi ke direktori kerja
COPY . .

# Menjalankan aplikasi
CMD ["node", "index.js"]

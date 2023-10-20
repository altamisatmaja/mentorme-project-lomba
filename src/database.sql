CREATE TABLE `user` (
  `id_user` int PRIMARY KEY,
  `nama` varchar(255),
  `email` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `transaksi_keuangan` (
  `id_transaksi` int PRIMARY KEY,
  `id_user` int,
  `nama_transaksi` varchar(255),
  `nilai_transaksi` int,
  `kategori_transaksi` varchar(255),
  `tanggal_transaksi` date,
  `tipe_transaksi` varchar(255)
);

CREATE TABLE `investasi` (
  `id_investasi` int PRIMARY KEY,
  `id_user` int,
  `kode_ticker` varchar(255),
  `nama_perusahaan` varchar(255),
  `jumlah_lot` int,
  `harga_beli` int,
  `harga_jual` int,
  `tanggal_investasi` date
);

CREATE TABLE `saldo` (
  `id_saldo` int PRIMARY KEY,
  `id_user` int,
  `saldo_awal` int,
  `saldo_akhir` int,
  `tanggal_pembaruan` date
);

CREATE TABLE `uang_statistik` (
  `id_statistik` int PRIMARY KEY,
  `id_user` int,
  `pemasukan_harian` int,
  `pemasukan_mingguan` int,
  `pemasukan_bulanan` int,
  `pengeluaran_harian` int,
  `pengeluaran_mingguan` int,
  `pengeluaran_bulanan` int
);


CREATE TABLE `rekap_investasi` (
  `id_investasi` int PRIMARY KEY,
  `id_user` int,
  `kode_ticker` varchar(4),
  `nama_perusahaan` varchar(255),
  `lot` int,
  `harga_beli` int,
  `harga_jual` int,
  `tanggal` date
);
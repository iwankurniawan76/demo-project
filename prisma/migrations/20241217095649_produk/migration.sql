-- CreateTable
CREATE TABLE `Produk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `produk` VARCHAR(191) NOT NULL,
    `harga` INTEGER NOT NULL,

    UNIQUE INDEX `Produk_produk_key`(`produk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Formatting Database

Pada menu ini akan dijelaskan bagaimana penulisan nama database, nama table, dan nama kolom yang akan kita gunakan sebagai standarisasi. 

Harap di ikuti format berikut guna membuat pekerjaan kita semua lebih mudah dan lebih cepat untuk dipahami teman-teman yang lain. 

## Penulisan Nama Database
1. Gunakan huruf kecil semua.
2. Format penulisan menggunakan **snake_case**

## Penulisan Nama Table
1. Gunakan bahasa inggris, jangan menggunakan bahasa indonesia
2. Format untuk lebih dari 1 kata, gunakan format **snake_case** : `customer_orders` bukan `customerorders` atau `CustomerOrders`
3. Penulisan huruf kecil semua
4. Nama table gunakan format plural, contoh `users` bukan `user`
5. Jangan menggunakan kata yang ambigu, jadi langsung *to the point* saja.

## Penulisan Nama Kolom Pada Table
1. Gunakan bahasa inggris, jangan menggunakan bahasa indonesia
2. Format untuk lebih dari 1 kata, gunakan format **snake_case**
3. Penulisan huruf kecil semua
4. Jangan menggunakan kata yang ambigu, jadi langsung *to the point* saja.
5. Jangan di singkat-singkat, tuliskan nama dengan lengkap : `middle_name` bukan `mid_nm` 
6. Untuk nama kolom foreign key, awali dengan nama table kemudian disambung dengan primary key dari table tujuannya, misalnya foreign key ke table `users` jadi tulis nama table foreign key nya : `users_id` jangan `id_user` atau `userid`
7. Jangan lupa tambahkan 4 kolom tambahan untuk setiap table yang dibuat
   - `created_by` : untuk mencatat siapa yang membuat data
   - `created_at` : untuk mencatat kapan data di buat
   - `updated_by` : untuk mencatat siapa yang terakhir memperbarui data
   - `updated_at` : untuk mencatat terakhir data di update

## Case khusus
Untuk project secret & rahasia, untuk kolom `username` & `password` harus gunakan nama lain, jadi tidak boleh menggunakan nama kolom yang terang-terangan seperti itu, bisa diubah menjadi kata lain misalnya `laptop` & `charger`, atau data-data lain yang dirasa sangat rahasia maka gunakan nama kolom dengan kata lain.


## Sumber
- [Database Naming Convention](https://github.com/RootSoft/Database-Naming-Convention)
- [Database Naming Standards](https://dev.to/ovid/database-naming-standards-2061)
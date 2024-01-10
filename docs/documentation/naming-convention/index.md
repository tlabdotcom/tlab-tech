# Naming Convention 

## Intro
**Naming Convention** merupakan aturan untuk memilih *style* penulisan *variables*, *functions*, *class*, dan entitas lain pada *source code* dan dokumentasi.

Alasan menggunakan *naming convention* :

* Mengurangi effort untuk membaca dan memahami *source code*.
* Jika ada *code review*, tidak perlu fokus kepada *syntax* dan standar/gaya penulisan cukup fokus ke kualitas algoritma, dll.
* Mendorong konsistensi dalam tim *development*;
* Mengurangi potensi penulisan yang ambigu;
* Membuat pekerjaan lebih profesional (misalnya, dengan tidak memperbolehkan nama yang terlalu panjang, nama atau singkatan yang lucu atau “imut”);
* Menghindari *naming collisions* yang mungkin terjadi ketika kolaborasi dengan tim/perusahaan lain;
* Memberikan kemudahan untuk memahami *code* jika digunakan kembali setelah jangka waktu yang lama.

## Standar naming convention di TLab

Pemilihan *naming convention* dapat menjadi isu yang kontroversial karena masing-masing developer menganggap standar mereka sebagai yang terbaik. Maka dari itu kami telah melakukan voting dari beberapa developer dan berikut hasilnya:


| Identifier type    	| Rules for naming	| Examples                                                           							|
|-----------------------|-------------------|-----------------------------------------------------------------------------------------------|
| Classes / Interface	| <code>PascalCase</code>		| <ul><li><code>class User {}</code></li><li><code>class ProductCart {}</code></li></ul>		|
| Methods / Function   	| <code>camelCase</code>		 	| <ul><li><code>run();</code></li><li><code>getBackground();</code></li></ul>	 				|
| Variables          	| <code>snake_case</code> 		| <ul><li><code>var limit = 10;</code></li><li><code>let data_product = [];</code></li></ul>	|
| File 				 	| <code>PascalCase</code> for <code>.vue</code>, <code>.py</code> 	| <ul><li><code>Form.vue</code></li><li><code>ErrorRepository.py</code></li></ul> 				|
|  				 	| <code>camelCase</code> for <code>.ts</code>, <code>.js</code>		| <ul><li><code>config.ts</code></li><li><code>scrollBehavior.js</code></li></ul> 				|
| Folder 				 	| <code>PascalCase</code> for Python 	| <ul><li><code>SupportModule</code></li><li><code>Repositories</code></li></ul> 				|
|  				 	| <code>kebab-case</code> for Javascript		| <ul><li><code>custom-library</code></li><li><code>layout-structure</code></li></ul> 				|

<!-- | File 				 	| KebabCase 		| <ul><li><code>user-profile.js</code></li><li><code>package-lock.json</code></li></ul>        	| -->

Reference
- https://en.wikipedia.org/wiki/Naming_convention_(programming)

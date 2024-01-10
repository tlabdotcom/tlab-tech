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

<table>
	<thead>
		<tr>
			<th>Identifier type</th>
			<th>Rules for naming</th>
			<th>Examples</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Classes / Interface</td>
			<td><code>PascalCase</code></td>
			<td>
				<ul>
					<li><code>class User {}</code></li>
					<li><code>class ProductCart {}</code></li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Methods / Function</td>
			<td><code>camelCase</code></td>
			<td>
				<ul>
					<li><code>run();</code></li>
					<li><code>getBackground();</code></li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Variables</td>
			<td><code>snake_case</code></td>
			<td>
				<ul>
					<li><code>var limit = 10;</code></li>
					<li><code>let data_product = [];</code></li>
				</ul>
			</td>
		</tr>
		<tr>
			<td rowspan="2">File</td>
			<td><code>PascalCase</code> for <code>.vue</code>, <code>.py</code></td>
			<td>
				<ul>
					<li><code>Form.vue</code></li>
					<li><code>ErrorRepository.py</code></li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><code>camelCase</code> for <code>.ts</code>, <code>.js</code></td>
			<td>
				<ul>
					<li><code>config.ts</code></li>
					<li><code>scrollBehavior.js</code></li>
				</ul>
			</td>
		</tr>
		<tr>
			<td rowspan="2">Folder</td>
			<td><code>kebab-case</code> for Javascript</td>
			<td>
				<ul>
					<li><code>custom-library</code></li>
					<li><code>layout-structure</code></li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><code>PascalCase</code> for Python</td>
			<td>
				<ul>
					<li><code>SupportModule</code></li>
					<li><code>Repositories</code></li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>

Reference
- https://en.wikipedia.org/wiki/Naming_convention_(programming)

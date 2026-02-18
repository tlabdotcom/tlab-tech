# Naming Convention

::: info 💡 Intro
**Naming Convention** merupakan aturan untuk memilih _style_ penulisan _variables_, _functions_, _class_, dan entitas lain pada _source code_ dan dokumentasi.

Alasan menggunakan _naming convention_ :

- Mengurangi effort untuk membaca dan memahami _source code_.
- Jika ada _code review_, tidak perlu fokus kepada _syntax_ dan standar/gaya penulisan cukup fokus ke kualitas algoritma, dll.
- Mendorong konsistensi dalam tim _development_;
- Mengurangi potensi penulisan yang ambigu;
- Membuat pekerjaan lebih profesional (misalnya, dengan tidak memperbolehkan nama yang terlalu panjang, nama atau singkatan yang lucu atau “imut”);
- Menghindari _naming collisions_ yang mungkin terjadi ketika kolaborasi dengan tim/perusahaan lain;
- Memberikan kemudahan untuk memahami _code_ jika digunakan kembali setelah jangka waktu yang lama.
  :::

## Standar naming convention di TLab

Pemilihan _naming convention_ dapat menjadi isu yang kontroversial karena masing-masing developer menganggap standar mereka sebagai yang terbaik. Maka dari itu kami telah melakukan voting dari beberapa developer dan berikut hasilnya:

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

- Wikipedia - [Naming Convention (Programming)](<https://en.wikipedia.org/wiki/Naming_convention_(programming)>)
- Python - [PEP 8 – Style Guide for Python Code](https://peps.python.org/pep-0008/)
- Vue.js - [Style Guide](https://vuejs.org/style-guide/)
- JavaScript - [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Java - [Java style guide](https://www.cs.cornell.edu/courses/JavaAndDS/JavaStyle.html)
- C# -[ C# Coding Convention](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)
- Go - [Uber Go Style Guide](https://github.com/uber-go/guide/blob/master/style.md)
- C++ [- C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)
- PHP - [PSR-12: Extended Coding Style](https://www.php-fig.org/psr/psr-12/)

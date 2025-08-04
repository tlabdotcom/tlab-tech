# Conventional Commits 

## Intro
*Conventional Commits* merupakan *framework* untuk menulis *commit message* yang terstruktur dan informatif pada suatu *repository*. Tujuan pengimplementasian *conventional commits* yaitu untuk memberikan format yang mudah dipahami dan terstruktur yang mencakup informasi tentang jenis perubahan yang dilakukan dalam *commit* tersebut. Dengan format yang terdefinisi dengan baik dan jelas diharapkan anggota tim dapat dengan cepat memahami perubahan yang terjadi pada proyek dan hal tersebut juga akan mempercepat proses *onboarding* anggota baru serta menyederhanakan alur komunikasi antar anggota tim dengan membaca *commit message*. *Conventional Commits* juga dapat dimanfaatkan untuk otomatisasi dan *generate changelog*.


## Struktur commit message
```
<type>(<optional scope>): <description>

<optional body>

<optional footer(s)>

```

### Type
* ```feat```: A new feature
* ```fix```: A bug fix
* ```refactor```: A code that neither fix bug nor adds a feature. (eg: You can use this when there is semantic changes like renaming a variable/ function name)
* ```perf``` A code that improves performance
* ```style```: A code that is related to styling
* ```test```: Adding new test or making changes to existing test
* ```docs```: Documentation related changes
* ```build```: Build related changes (eg: npm related/ adding external dependencies)
* ```ops```: Affect operational components like infrastructure, deployment, backup, recovery, ...
* ```chore``` Miscellaneous commits e.g. modifying ```.gitignore```

### Scope
The ```scope``` provides additional contextual information.
* Is an **optional** part of the format
* Allowed Scopes depends on the specific project
* Don't use issue identifiers as scopes

### Breaking Changes Indicator
Breaking changes should be indicated by an `!` before the `:` in the subject line e.g. `feat(api)!: remove status endpoint`

* Is an *optional* part of the format

### Description
The `description` contains a concise description of the change.

* Is a *mandatory* part of the format
* Use the imperative, present tense: "change" not "changed" nor "changes"
	* Think of `This commit will...` or `This commit should...`
* Don't capitalize the first letter
* No dot (.) at the end

### Body
The `body` should include the motivation for the change and contrast this with previous behavior.

* Is an *optional* part of the format
* Use the imperative, present tense: "change" not "changed" nor "changes"
* This is the place to mention issue identifiers and their relations


### Footer
The `footer` should contain any information about Breaking Changes and is also the place to reference Issues that this commit refers to.

* Is an *optional* part of the format
* *optionally* reference an issue by its id.
* *Breaking Changes* should start with the word `BREAKING CHANGES:` followed by space or two newlines. The rest of the commit message is then used for this.

### Examples
* 
	```
	feat: add email notifications on new direct messages
	```
* 
	```
	feat(shopping cart): add the amazing button
	```
* 
	```
	feat!: remove ticket list endpoint

	refers to JIRA-1337

	BREAKING CHANGES: ticket enpoints no longer supports list all entites.
	```
* 
	```
	fix(api): handle empty message in request body
	```
* 
	```
	fix(api): fix wrong calculation of request body checksum
	```
* 
	```
	fix: add missing parameter to service call

	The error occurred because of <reasons>.
	```

* 
	```
	perf: decrease memory footprint for determine uniqe visitors by using HyperLogLog
	```
* 
	```
	build: update dependencies
	```
* 
	```
	build(release): bump version to 1.0.0
	```
* 
	```
	refactor: implement fibonacci number calculation as recursion
	```
* 
	```
	style: remove empty line
	```

Reference
- https://www.conventionalcommits.org/en/v1.0.0/
- https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13
- https://dev.to/ishanmakadia/git-commit-message-convention-that-you-can-follow-1709
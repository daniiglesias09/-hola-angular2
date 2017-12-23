(function (global) {
	
	var pathMapping = {
		'@angular': 'node_modules/@angular',
		'rxjs': 'node_modules/rxjs',
	};

	var packages = [
		'@angular/common',
		'@angular/compiler',
		'@angular/core',
		'@angular/http',
		'@angular/plataform-browser',
		'@angular/plataform-browser-dynamic',
		'@angular/router',
		'@angular/router-deprecated',
		'@angular/testing',
		'rxjs',
		'built',
	];

	var packagesConfig = {};

	packages.forEach(function(packageName) {
		packagesConfig[packageName] = {
			main: 'index.js',
			defaultExtension:'js'
		};
	});

	system.config({
		map: pathMapping,
		packages: packagesConfig,
	});
})(this);

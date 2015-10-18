
// Configuration object
module.exports = {

	// Paths
	paths: {

		sass: {
			input: '2-Presentation/**/*.scss',
			output: './',
			prefixVersion: 'last 2 versions'
		},

		js: {
			input: '3-Logic/2-Frontend/**/*.js',
			coreInput: '3-Logic/2-Frontend/Core/*.js',
			vendorInput: '3-Logic/2-Frontend/Plugins/*.js',
			output: './',
			sourceMap: false
		},

		browsersync: {
			localUrl: 'ivanjuras.dev',
			portNumber: 3000
		}

	},

	// FTP
	ftpSettings: {

		ftpInput: [
			'./**',
			'!./node_modules/**',
			'!./4-Gulp/**',
			'!./*.gitignore',
			'!./*.jshintignore',
			'!./gulpfile.js',
			'!./package.json',
		],
		ftpHostName: 's4.trafficplanethosting.com',
		ftpUserName: 'jurky3fo.ftp.ivanjuras',
		ftpPassword: 'NN22mm34!!',
		ftpRemoteDirectory: '/wp-content/themes/IvanJurasTheme',
		ftpPort: 21,
		ftpParallelStreams: 8

	},

	// Other
	otherSettings: {

		serverPort: 3000
		
	}

};
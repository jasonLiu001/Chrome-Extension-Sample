module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> - <%= grunt.template.today("yyyy-mm-dd")%>  */'
            },
            dist: {
                files: {
                    'dist/autoInvest.debug.js': [
                        "static/js/platform/dream/iframeresizercontent.js",
                        "static/js/platform/dream/injectedcontent.js"
                    ]
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - <%= grunt.template.today("yyyy-mm-dd")%>  */',
                drop_console: true
            },
            dist: {
                files: {
                    'dist/autoInvest.min.js': ['dist/autoInvest.debug.js']
                }
            }
        },
        watch: {
            build: {
                files: ['*.js', './**/*.js'],
                //tasks: ['concat', 'jshint', 'uglify'],//暂时移除语法检查
                tasks: ['concat', 'uglify'],
                options: {spawn: true}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat'); //合并
    //grunt.loadNpmTasks('grunt-contrib-jshint'); //语法检查
    grunt.loadNpmTasks('grunt-contrib-uglify'); //压缩
    grunt.loadNpmTasks('grunt-contrib-watch'); //文件修改监视
    //任务执行 这里注意各个任务的执行顺序
    grunt.registerTask('default', ['concat', 'uglify', 'watch']);
};
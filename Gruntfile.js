module.exports = function (grunt) {
    
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-csscomb");
    
    grunt.initConfig({
        
        less: {
            style: {
                files: {
                    "css/style.css": ["less/style.less"]
                }
            }
        },
        csscomb:  {
            style: {
                expand: true,
                src: ["less/**/*.less", "**/*.css"]
            }
        },
        watch: {
            css: {
                files: 'less/style.less',
                tasks: ['less'],
                options: {
                    livereload: true,
                    files: ['css/style.css']
                }
            }
        }
    });
};
require 'uglifier'

task :uglify do
  uglified = Uglifier.compile(File.read("build/assets/js/site.js"))
  File.open("build/assets/js/site.js", "w") do |file|
    file.write uglified
  end
end

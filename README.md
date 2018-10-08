# Web Crawling Bootcamp Site


### PRODUCTION

to build static files from jekyll:

    $ docker run --rm \
        -v "$(pwd):/src" \
        -w /src \
        ruby:2.3 \
        sh -c 'bundle install \
            --path vendor/bundle \
            && bundle exec jekyll build --watch'

later copy files to nginx static folder:

    $ mv web /var/www/bootcamp
